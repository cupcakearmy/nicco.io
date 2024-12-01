---
title: 'Matomo vs uBlock Origin'
date: '2021-01-28'
categories:
  - 'general'
tags:
  - 'blocker'
  - 'matomo'
  - 'stats'
  - 'tracking'
coverImage: './images/luke-chesser-JKUTrJ4vK00-unsplash-scaled.jpg'
---

After [Ackee](https://github.com/electerious/Ackee) got an update and stopped working I wanted to search for an alternative to get some stats on my statically rendered site. As no server is used, I need some 3rd party service.

I don't want to spy on people, nor set cookies and annoy people with consent banners if they only want to read a damn blog post. The goal is just get a feel for the traffic on the site.  
This is important to mention as the next steps could sound a bit nefarious otherwise.  
Data collected on this site is 100% anonymous and [GDPR](https://gdpr.eu/) compliant.

Since Matomo is the de facto way to go, I spun up the Matomo server with my trusted docker-traefik setup and was up and running in no time.  
( I'll share the config files if anyone is interested at the bottom. )

Then I quickly copied the JS tracker code in my main html template and thought that was it. **Wrong**.

## The problem defaults.

So turns out that Matomo, being widely used is of course included in many Ad-Blocker lists and therefore my stats did not work. Lets see why:  
Basically all ad blockers work with lists. Those lists include pattern that if matched will be filtered out. Let's take a look at the default Matomo tracking code:

```
<script type="text/javascript">
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//stats.nicco.io/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
```

We can see that my stats server is `stats.nicco.io`. And we also can see that the tracking script is loaded by `matomo.js`, which then sends the details to `matomo.php`. Well that is of course incredibly easy to block, and it is as you can see below:

<figure>

![](images/Screenshot-2021-01-28-at-12.12.59.png)

<figcaption>

Part of the EasyList Filter

</figcaption>

</figure>

<figure>

![](images/Screenshot-2021-01-28-at-12.14.03.png)

<figcaption>

Part of the EasyList Filter

</figcaption>

</figure>

That won't work, and since most of the people that visit this site are probably developers which probably have some kind of ad blocker installed.

## Solution time

So after a short Ecosia search I landed on the blog of [Christian Mochow](https://christianmochow.de/author/christian-mochow/) that wrote a [blog post](https://christianmochow.de/beitraege/tools/catch-me-if-you-can-adblocker-umgehen-mit-matomo/) on this issue. I got the solution from his article.

Luckily Apache has the famous Rewrite module, which will solve all our problems. I bet most of you already know where this is headed.

We can create a `.htaccess` file in the root of our Matomo installation folder, to cloak our requests.

```
# .htaccess
RewriteEngine On
RewriteRule ^unicorn matomo.js
RewriteRule ^rainbow matomo.php
```

Now if we request `https://stats.nicco.io/unicorn` we actually get the response for `https://stats.nicco.io/matomo.js` and the same for `rainbow` and `matomo.php`.

```
// Replace in the client

_paq.push(['setTrackerUrl', u+'matomo.php']); // Before
_paq.push(['setTrackerUrl', u+'rainbow']); // After

g.src = u + 'matomo.js' // Before
g.src = u + 'unicorn' // After
```

**Awesome!**

I had to create a minuscule `Dockerfile` as the `Rewrite` module is not enabled per default in the standard Matomo docker image.

```
# Dockerfile
FROM matomo
RUN a2enmod rewrite
```

## Responsible Usage

Now as you can see it's incredibly easy to mask tracking stuff, and I bet there are a lot of people doing this in the wild. It is important to respect the privacy of your users and you should never store more data than you need and in the best case don't store data at all.

**Anonymize as much as possible!** Matomo makes this easy. You can effortlessly delete 2 bytes of each ip address (half of the info), enforce strict no cookie tracking and automatically delete data after `x` days. Please do ❤️

### Config Files

The `Dockerfile` and the `.htaccess` files are shown above.

```
# docker-compose.yml
version: "3.7"

networks:
  traefik:
    external: true

services:
  db:
    image: mariadb
    command: --max-allowed-packet=64MB
    restart: unless-stopped
    volumes:
      - ./data/db:/var/lib/mysql
    env_file: .env

  app:
    build: .
    restart: unless-stopped
    links:
      - db
    volumes:
      - ./data/matomo:/var/www/html
      - ./.htaccess:/var/www/html/.htaccess
    env_file: .env
    labels:
      - traefik.enable=true
      - traefik.docker.network=traefik
      - traefik.port=80
      - traefik.backend=matomo
      - "traefik.frontend.rule=Host:stats.nicco.io;"
    networks:
      - traefik
      - default
```

```
# .env
MYSQL_DATABASE=matomo
MYSQL_USER=matomo
MYSQL_PASSWORD=<random bytes>
MYSQL_RANDOM_ROOT_PASSWORD=yes

MATOMO_DATABASE_HOST=db
MATOMO_DATABASE_ADAPTER=mysql

MATOMO_DATABASE_DBNAME=matomo
MATOMO_DATABASE_USERNAME=matomo
MATOMO_DATABASE_PASSWORD=<random bytes>
```

See the [code for this website](https://github.com/cupcakearmy/nicco.io/blob/220643770385bebb05094b440c28441b49184556/src/template.html#L37-L64).
