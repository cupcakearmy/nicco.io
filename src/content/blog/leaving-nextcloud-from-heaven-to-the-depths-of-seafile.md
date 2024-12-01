---
title: 'Leaving Nextcloud: From heaven to the depths of Seafile'
date: '2021-03-23'
updatedDate: '2021-03-27'
categories:
  - 'general'
tags:
  - 'migration'
  - 'nextcloud'
  - 'seafile'
coverImage: './images/pawel-nolbert-xe-ss5Tg2mo-unsplash.jpg'
---

Today I'll share and explain the motivations that lead me to leave Nextcloud and choose Seafile, while hopefully making the transition smooth for anyone that wants to follow along. Spoiler: Performance and stuff constantly breaking leads to a Seafile beta being way more stable and reliable that a Nextcloud "Production" release.

Nextcloud is the the de-facto way to go for most self hosted Cloud / Dropbox / Google Drive. So a few years ago in my move to a more ownership driven approach to my data I setup a Nextcloud instance and was quite happy. They have an iOS app and a macOS sync client.  
There are numerous of plug-ins that can accomplish anything from contacts syncing with WebDav to GSuite-Like online collaboration with the Collabora integration, a mail client and real time video conferences with Nextcloud Talk. For many (persons & businesses) this means a convenient place where all the tools are combined under one platform.

## Where the issues started

Trying to be everything at the same time comes at a cost. And that is generally an experience that at least in my experience never feels polished or finished. While the Nextcloud Plug-Ins are incredibly versatile and powerful they also leave room for segmentation and you will notice it.

<figure>

![](images/pawel-nolbert-xe-ss5Tg2mo-unsplash.jpg)

<figcaption>

Cloud and Ocean

</figcaption>

</figure>

### The permanent alpha

That's what using Nextcloud feels like 75% of the time. I have no insight into the company behind the project but it feels like they are chasing a release cycle for the sake of paper launching unfinished features that compromise in terms of stability and polish. The thing that bothers me the most is that they are constantly marketed as "production ready" when they clearly had not nearly enough QA.

2 years ago I tried to install Collabora for an organisation I'm involved with and the setup was everything but straight forward. Docs where limited and the answers buried either in a forum thread or github issue. After many web searches I got it to work, but the performance (at least when I tested) was not really usable. We ended up using Google Docs and Etherpad.

Then there was the story with end to end encryption (E2EE) for files. This was a feature that was promoted quite extensively by Nextcloud and [released as stable](https://nextcloud.com/blog/production-ready-end-to-end-encryption-and-new-user-interface-arrive-with-nextcloud-desktop-client-3-0/) after many delays. So I followed the instructions on installing it and... [the sync clients broke down](https://github.com/nextcloud/desktop/issues/2593). What happened? Well Nextcloud released software as stable and production ready, but the most basic functionality was simply not ready and a lot of clients stopped syncing, mine included.

A few weeks ago [Nextcloud 21](https://nextcloud.com/blog/nextcloud-hub-21-out-with-up-to-10x-better-performance-whiteboard-and-more-collaboration-features/) was released and boasted a "10x Speed improvement" which of course is an assumption that cannot hold it's grounds. But I was excited as even a "1.5x-2x" improvement would have been really substantial. I installed the new version and well... performance seemed untouched but as a new feature my UI was stuck in a permanent dark mode UI with unreadable text (see the files sizes). I don't run any custom theme or anything. Is this a complete deal breaker? Of course not, but it goes a long way to show how untested the whole software is if a stable release has unreadable text in the start page of your product.

<figure>

![](images/Screenshot-2021-03-23-at-10.58.31.png)

<figcaption>

Screenshot of Nextcloud 21 with colour bugs

</figcaption>

</figure>

In addition to the weird CSS bugs it also introduced a new bug where I have to frequently reload the web UI as it "cannot connect" to the server. Definetely production ready.

### Performance

The final issue is the performance as a whole. The web interface regularly takes around 5-10s to load for each action you perform. The only thing that is quite responsive is navigating through folders. It's a drag when you just quickly want to get stuff done and the actual work you have to do takes less than waiting for Nextcloud to serve you the website. It's simply put not fun to use it.

There is also the issue that you need to spin up a second container for cron jobs like it's 2003 and that every update or so you manually have to go into the console to rebuild some indexes. I'll leave them unjudged as it maybe those are "Enterprise Features" which I don't understand.

## Seafile to the rescue

The last update (Nextcloud 21) was the point where I decided to jump ship as explained above. The question was: What options do I have?

- Pydio
- Seafile

Pydio reinvented itself with the launch of it's Cells product. However at the time of writing the macOS client did not seem ready and therefore was excluded.

Seafile on the other hand just had the release of it's 8th version (still in beta afaik) and supports iOS and macOS.

### Migration

I had to migrate 2 things: Cal/CardDav for Calendar and Contacts and the files drive itself.  
Spinning up a Seafile instance was a breeze as I host every single service with docker.

```
# .env
MYSQL_ROOT_PASSWORD=random
DB_HOST=db
DB_ROOT_PASSWD=random

SEAFILE_ADMIN_EMAIL=me@example.com
SEAFILE_ADMIN_PASSWORD=a_very_secret_password
```

```
version: "2.0"

services:
  db:
    image: mariadb:10.5
    env_file: .env
    volumes:
      - ./data/db:/var/lib/mysql

  memcached:
    image: memcached:1.5.6
    entrypoint: memcached -m 256

  app:
    image: seafileltd/seafile-mc:latest
    env_file: .env
    volumes:
      - ./data/app:/shared
    depends_on:
      - db
      - memcached
```

I then installed the macOS client and simply copied all the files over. Before actually copying the files I added a `seafile-ignore.txt` file in the root to exclude files from being uploaded to the server. Read more [here](https://help.seafile.com/syncing_client/excluding_files/).

**Gotcha**  
The ignore file can be tricky if you tread it like a `.gitignore` files. `.git/` would not exclude all those directories, only the root one. To exclude all `.git` directories you actually need to insert `*/.git/` into the `seafile-ignore.txt` file.

The UI and the sync is incredibly fast, especially when compared to Nextcloud and is delightful to use. It has all the features you would expect: 2FA, user groups, quotas, link sharing (with support for expiration, password and upload only), files sharing between users, etc. It also features collaboration features like Nextcloud but I haven't tested them yet. Also it features an actual REST API with tokens that you can generate (as read-write or read only tokens). Another issue I had to battle with in the past with Nextcloud.

The mobile app on iOS does everything you would expect it to do, including integrating with the native Files API.

For Notability I use the backup feature that uploads backups as PDFs of my notes to a WebDav server. However Seafile disables the usage of WebDav for users with 2FA as it would be a vulnerability. As a solution I simply created a "Notability" user without 2FA and shared the folder i want to use as target with that user. Awesome! Now I have a scoped user that only has access to the notability backup folder without having access to the rest of my files.

## CardDav/CalDav

Since Seafile focuses only on the "Drive" component I had to migrate my contacts and calendars elsewhere. The way to go solution is Radicale and I was surprised to find that there is not official docker image? After a 2-min research I found the most popular docker image did not support Authentication? So I had to create my own.

You can find my [Radicale docker image here](https://github.com/cupcakearmy/docker-radicale), maybe you find it useful. It supports bcrypt passwords and can be deployed with just the env variables for `USER` and `PASSWORD`. It has been tested with the iOS and macOS native clients.

```
# .env
USER=foo
PASSWORD=secret
```

```
# docker-compose.yml
version: '3.7'

services:
  app:
    image: cupcakearmy/radicale
    env_file: .env
    volumes:
      - ./data:/data
    ports:
      - 80:5232
```

The "migration" was done by exporting the calendars I had in Nextcloud with the native macOS calendar app and simply reimporting them into the new server, again with the native client on macOS. Same procedure with the contacts. Sync works like a charm and I'll never go back.

### The downsides

As with any project Seafile has some drawbacks compared to Nextcloud. Beside the obvious fact that Nextcloud has tons of plug-ins and Seafile does not, Seafile does store data and therefore files in blobs, so they are not visible to the host machine. That means that you cannot directly access lets say a `hello.txt` directly from the filesystem of the server you are hosting the service on. This might be a deal breaker for some people.

Another thing that could bother some is that in the free version of Seafile there is no automatic garbage collection, so from time to time you should run the script to cleanup old data.

## Conclusion

To conclude the journey: It took me an evening to move everything, create the docker image for radicale and I could not be happier. Seafile feels so much more robust in comparison to the point that Nextcloud feels like a toy product. Of course this is not a fair comparison as Seafile only does file sync and not the other 10-20 big features Nextcloud brings to the table. However if you only use Nextcloud to sync files to your own cloud the comparison is not even close IMO.
