---
title: 'Reduce docker-compose files with YAML magic'
date: '2019-05-06'
categories:
  - 'coding'
tags:
  - 'docker'
  - 'docker-compose'
  - 'yaml'
coverImage: './images/guillaume-bolduc-259596-unsplash-scaled.jpg'
---

If you find yourself writing long docker-compose files because you need to specify the same things over and over again inside of the single services: **fear no more**!

<figure>

![](images/guillaume-bolduc-259596-unsplash-1024x741.jpg)

<figcaption>

Photo by [Guillaume Bolduc](https://unsplash.com/photos/uBe2mknURG4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/container?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

_Without further ado:_

```
version: '3.4' # min version 3.4

x-default: &default
  restart: always
  env_file: .env


services:

  web:
    <<: *default
    image: node
    # blablabla

  db:
    <<: *default
    image: postgres
```

Thats it! Now both `web` and `db` inherit the properties of `x-default`.

The `x-` prefix is a docker specific thing and is required. YAML support references also without the prefix. Also note that **version 3.4 or higher is required**.

btw: I recently was looking into [Sentry](https://sentry.io/welcome/) and found this [docker-compose](https://github.com/getsentry/onpremise/blob/master/docker-compose.yml) file. Thats how I discovered it.
