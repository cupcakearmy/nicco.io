---
title: 'Use Traefik and RegExp to bypass AdBlockers'
date: '2022-01-10'
coverImage: './images/hyeryi-sVk8nrCQ06g-unsplash-scaled.jpg'
categories:
  - 'general'
  - 'security'
tags:
  - 'ad-blocker'
  - 'tracking'
  - 'traefik'
  - 'umami'
---

**This will be a controversial one, so let me explain the motivations first.**

I was using Matomo for collecting traffic metrics on different websites, however it's kind of bloated for what I need to do. My goal is to get a grasp on viewership, **without collecting personal data** or any fancy analytics. I wanted to try out Umami as it seems simple and is privacy respecting first (including GDPR), without the need to tweak settings.

The problem was that my AdBlocker was not letting request through and since most of the people visiting this site will probably devs they surely have some AdBlocker installed.

**FYI**: All the data collected on this site are accessible and visible to anyone [here](https://spectare.nicco.io/share/Xklie3UU/Nicco).

## The issue

Lets have a look at the typical Umami code:

```html
<script
  async
  defer
  data-website-id="3808ed9b-9fc6-481b-bf6c-45e07f7aedf9"
  data-domains="nicco.io"
  src="https://spectare.nicco.io/umami.js"
></script>
```

The problem is that most block list have `umami.js` on it, which make measuring anonymous traffic impossible. Now blocklists are very static (for performance reasons) and therefore quite easy to circumnavigate.

## Rerouting

What do you do when the street you are driving on is blocker? You take the detour.

The solution is not to use `umami.js` directly, but redirect it form another name. With traefik this is very easy using the [ReplacePathRegex middleware](https://doc.traefik.io/traefik/v2.0/middlewares/replacepathregex/). Let's see how:

```yaml
version: '3.8'

networks:
  proxy:
    external: true

services:
  umami:
    image: ghcr.io/mikecao/umami:postgresql-latest
    networks:
      - default
      - proxy
    labels:
      - traefik.enable=true
      - traefik.http.routers.umami.rule=Host(`spectare.nicco.io`)
      - traefik.http.routers.umami.entrypoints=secure
      - traefik.http.routers.umami.tls.certresolver=le
      - traefik.http.routers.umami.middlewares=umami-rewrite
      - traefik.http.middlewares.umami-rewrite.replacepathregex.regex=/unicorn.js
      - traefik.http.middlewares.umami-rewrite.replacepathregex.replacement=/umami.js

  db:
    image: postgres:12-alpine
    ...
```

We need to configure the `regex` and `replacement` parameters for the `replacepathregex` middleware. In my case I chose to use `/unicorn.js` and redirect it internally to `/umami.js`. This way the internal service is doing business as usual while ad blockers do not block the request.

## Responsibility

As you can imagine this would enable far more nefarious use cases. You could also mask it as something like `23hf872.min.js` or whatever. So use with caution and **always keep in mind your users privacy and data!**
