---
title: 'Be your own (tiny) image CDN'
date: '2023-04-28'
coverImage: './images/meagan-carsience-QGnm_F_nd1E-unsplash1.jpg'
---

Today, I want to share how to create and host your own image transformation service, much like the known [Imgix](https://imgix.com/) and [Cloudinary](https://cloudinary.com/). The aim is to have a powerful transformation server for images that caches, so images only need to be computed once.

The building blocks will be [imgproxy](https://github.com/imgproxy/imgproxy) and [nginx](https://nginx.org/). The former is a battle tested and fast image server with support for most image operations, while nginx should not need an introduction.

<figure>

![](images/meagan-carsience-QGnm_F_nd1E-unsplash1.jpg)

<figcaption>

Photo by [Meagan Carsience](https://unsplash.com/@mcarsience_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/QGnm_F_nd1E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

While imgproxy is the core of this operation, it does not support caching. This is intentional, as it's intended to be run behind a proxy. For that, nginx is the tool of choice, as it enables us to easily setup caching rules to avoid generating the same image twice in a given cache interval. Everything will be done in docker containers, but the concept, of course, extends to bare metal too.

## Setup

Imgproxy fortunately is very customisable and options can be passed by env variables, which is wonderful.

It's generally advised to use signed URLs if possible. In my case, there was no backbend that could sign them, so it was avoided. Whenever omitting signing, it is critical to limit the allowed sources to the minimum with `IMGPROXY_ALLOWED_SOURCES` so that it cannot be abused by other websites.

Below is docker file used. Required is only the `IMGPROXY_BIND` as otherwise nginx cannot connect to our image container. The other options are up to you and are just here for a quick setup.

```
# docker-compose.yaml
version: '3.8'

volumes:
  cache:

services:
  img:
    image: darthsim/imgproxy
    environment:
      # Required for nginx
      IMGPROXY_BIND: 0.0.0.0:80

      # Security
      IMGPROXY_MAX_SRC_RESOLUTION: 100
      IMGPROXY_ALLOWED_SOURCES: https://images.example.org/

      # Transforms
      IMGPROXY_ENFORCE_WEBP: true
      IMGPROXY_ENFORCE_AVIF: true
      IMGPROXY_ONLY_PRESETS: true
      IMGPROXY_PRESETS: default=resizing_type:fit,sm=size:250:250,md=size:500:500,lg=size:1000:1000

  proxy:
    image: nginx
    ports:
      - 80:80
    volumes:
      - ./proxy.conf:/etc/nginx/conf.d/default.conf:ro
      - cache:/tmp
```

The more interesting part is the nginx configuration file below. In this case, we target 30 days as a cache TTL. This could be easily increased if we are only talking about static images.

```
# Set cache to 30 days, 1GB.
# Only use the uri as the cache key, as it's the only input for imageproxy.
proxy_cache_path /tmp levels=1:2 keys_zone=images:8m max_size=1g inactive=30d;
proxy_cache_key "$uri";
proxy_cache_valid 200 30d;

server
{
	listen 80;
	server_name _;

	location /
	{
		proxy_pass_request_headers off;
		proxy_set_header HOST $host;
		proxy_set_header Accept $http_accept;

		proxy_pass http://img;

		proxy_cache images;
	}
}
```

Here we are configuring a few things, so let's elaborate:

First a cache is configured at the location `/tmp`, with the name `images`, a maximum size of 1 gigabyte and the `inactive` parameter to 30 days.  
For the cache key, we use only the `$uri` variable, as all the parameters that affect image generation are included in the path and makes therefore the image transformation unique.  
Lastly, we tell nginx to cache all responses with code `200` for 30 days.

Another important trick is to strip all headers that reach the proxy. This is done by setting `proxy_pass_request_headers` and only passing the `Accept` header, as it's required for automatically determining the image format.
