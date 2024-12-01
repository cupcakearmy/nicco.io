---
title: 'Monitor your self hosted services for free'
date: '2022-07-07'
coverImage: './images/daniele-franchi-g2fJ7d7eKSM-unsplash.jpg'
tags:
  - self-host
  - monitoring
---

Monitoring services requires external resources, as monitoring your server(s) from the server itself does not make sense. Renting a whole server for monitoring is a bit of a resources (and money) waste.

## Getting a free VM

Luckily we can leverage the free tiers of many cloud providers. This gives us a free option and stability as they tend to be very reliable. Below is a list of free tiers available form the big 3 players. All of them offer a free VM per month, which is more than sufficient for our needs.

- [Google Cloud Project](https://cloud.google.com/free/docs/gcp-free-tier/#compute)
- [Microsoft Azure](https://azure.microsoft.com/en-in/pricing/free-services/)
- [Amazon AWS](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=categories%23compute)

Choose your preferred cloud, it does not really matter. I went with Google as I find the interface the nicest to use. For the OS of the VM I went which Ubuntu, but any Linux.

## Setup

For monitoring we will use [Uptime Kuma](https://github.com/louislam/uptime-kuma). It's an amazing free, open source monitoring tool, very similar to [UptimeRobot](https://uptimerobot.com/). For simplicity we will run it with Docker and Traefik.

First we need to [instal docker](https://docs.docker.com/engine/install/debian/#install-using-the-repository)

```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

apt update
apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

Also we want some basic firewall

```
apt install ufw
ufw allow 80
ufw allow 443
ufw allow 22
ufw enable
```

Don't forget to point your DNS to the server. For example as a subdomain `status.example.org`

## Depoly Uptime Kuma

We only need a `docker-compose.yaml` file now and we should be up and running. I'll share the folder structure below. We could but everything in one compose file but I like to keep thinks tidy.

```
.
├── kuma
│   └── docker-compose.yaml
└── traefik
    ├── docker-compose.yaml
    └── traefik.yaml
```

### Traefik

Lets start with Traefik. It will handle all our routing and TLS certificates. Remember to change the acme email down in the `traefik.yaml`

```
version: '3.8'

networks:
  default:
    external: true
    name: proxy

services:
  traefik:
    image: traefik:2.8
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./traefik.yaml:/etc/traefik/traefik.yaml:ro
      - ./data:/data
    labels:
      - "traefik.enable=true"

      # HTTP to HTTPS redirection
      - "traefik.http.routers.http_catchall.rule=HostRegexp(`{any:.+}`)"
      - "traefik.http.routers.http_catchall.entrypoints=insecure"
      - "traefik.http.routers.http_catchall.middlewares=https_redirect"
      - "traefik.http.middlewares.https_redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.https_redirect.redirectscheme.permanent=true"
```

```
#Define HTTP and HTTPS entrypoints
entryPoints:
  insecure:
    address: ":80"
  secure:
    address: ":443"

#Dynamic configuration will come from docker labels
providers:
  docker:
    endpoint: "unix:///var/run/docker.sock"
    network: "proxy"
    exposedByDefault: false

#Enable acme with http file challenge
certificatesResolvers:
  le:
    acme:
      email: me@example.org
      storage: /data/acme.json
      httpChallenge:
        # used during the challenge
        entryPoint: insecure
```

To get traefik running we just need to type the following

```
docker network create proxy
docker compose up -d
```

### Kuma

The compose file for Kuma is compact. Don't forget to change the domain to yours.

```
version: '3.8'

networks:
  default:
    external: true
    name: proxy

services:
  kuma:
    image: louislam/uptime-kuma:1
    restart: unless-stopped
    volumes:
      - ./data:/app/data
    labels:
    - traefik.enable=true
    - traefik.http.routers.kuma.rule=Host(`status.example.org`)
    - traefik.http.routers.kuma.entrypoints=secure
    - traefik.http.routers.kuma.tls.certresolver=le
```

Now you can navigate to your new monitoring website and create and admin account and setup monitors, alert systems and so on.

Many thanks to [Louis Lam](https://github.com/louislam) for creating and maintaining Utime Kuma! Consider donating!
