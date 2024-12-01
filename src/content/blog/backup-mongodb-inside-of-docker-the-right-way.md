---
title: 'Backup MongoDB inside of Docker the easy way'
date: '2019-08-15'
categories:
  - 'coding'
tags:
  - 'cli'
  - 'docker'
coverImage: './images/tobias-fischer-PkbZahEG2Ng-unsplash-scaled.jpg'
---

Backing up a mongo instance is more confusing than it should be. Maybe you have run into a `the input device is not a TTY` or you simply don't know how to do it? Here are two 1-Liner to backup and restore a running mongo instance.

## Setup

First we define our mongo instance like below. Notice that instead of mapping the data directory onto our filesystem we have a native volume.

###### docker-compose.yml

```
version: '3.7'

volumes:
  db:

services:
  db:
    image: mongo:3-xenial
    restart: always
    volumes:
      - db:/data/db
    ports:
      - 27017:27017
```

Then start with `docker-compose up -d`.

## Backup

First we will do a backup of our running instance.

```
docker-compose exec -T db mongodump --archive --gzip --db mydb > dump.gz
```

The `-T` option is for enabling piping the output to our own machine. We also tell mongo to use the `--gzip` option to compress the file significantly.  
Lastly we specify the `--db <database>` that we want to backup.

## Restore

Whenever we want to restore a db, or maybe seed it we can run the following:

```
docker-compose exec -T db mongorestore --archive --gzip < dump.gz
```
