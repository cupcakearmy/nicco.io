---
title: 'Automate Github releases with Drone.'
date: '2020-01-29'
categories:
  - 'coding'
tags:
  - 'cd'
  - 'drone'
coverImage: './images/franck-v-U3sOwViXhkY-unsplash-scaled-1.jpg'
---

If you have a project on github that has releases for code or binaries for example it might be a good idea to automate it. Not only this saved a lot of clicks and time, but also it makes releases predictable and therefore less prone to errors in the process.

For this article I will take my own [project](https://github.com/cupcakearmy/autorestic) as the example here, but of course this can be applied to any project, written in whatever language and/or framework.

Also I will base this guide on [Drone](https://drone.io/). But I'm sure there is the same workflow for jenkins/circle/whatever CI/CD system you are using.  
This means I'm assuming you have a repository already running with Drone.

<figure>

![](images/franck-v-U3sOwViXhkY-unsplash-scaled-1.jpg)

<figcaption>

Photo by [Franck V.](https://unsplash.com/@franckinjapan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/robot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

The first thing we will need is an access token for the Github API.  
You can get them here [https://github.com/settings/tokens](https://github.com/settings/tokens). I called my `Drone` and you need to check the permissions for the repos as follows.

<figure>

![](images/Screenshot-2020-01-29-at-14.57.05.png)

<figcaption>

How to create a new token in Github

</figcaption>

</figure>

Copy the token and save it somewhere **safe**. You will see it only once.

We will add this token to our Drone repository settings. For that navigate to your drone instance and open the settings for the repository in question.

<figure>

![](images/Screenshot-2020-01-29-at-14.55.28.png)

<figcaption>

Add the token to Drone secrets

</figcaption>

</figure>

I've called my secret `github` and I have not allowed it in PRs. Otherwise a PR made by some random user could trigger a release. We don't want that.

Now it's time to edit our drone file and make everything automatic. The flow at the end will be as follows.

1. Code, commit and develop
2. When you are ready for the next release we create a tag
3. Once a tag is created and pushed drone will automatically build and release that code attached to the tag.

Simple right? Lets see how!

```
# .drone.yml
---
kind: pipeline
name: default

steps:
- name: build
  image: node
  pull: always
  commands:
    - yarn
    - yarn run bin
  when:
    event: tag

- name: publish
  image: plugins/github-release
  pull: always
  settings:
    api_key:
      from_secret: github
    files: bin/*
    checksum:
      - sha512
    note: CHANGELOG.md
  when:
    event: tag
---
kind: signature
hmac: 3b1f235f6a6f0ee1aa3f572d0833c4f0eec931dbe0378f31b9efa336a7462912

...
```

Lets understand what is happening here:

First I'm building my project. In this case this is a standalone typescript executable build by [pkg](https://github.com/zeit/pkg). The build binaries will be emitted into the `./bin` folder. But it really does not matter. Could be anything.

Secondly we tell the [Github release plugin](http://plugins.drone.io/drone-plugins/drone-github-release/) what files we want to include in the release. In my case this was everything inside the `bin` folder. This can also be an array.

```
files:
  - dist/*
  - bin/binary.exe
```

The `api_key` includes the token, which we load from a secret so that we don't simply put in the `.drone.yml` file, which could be a huge security issue!

The `checksum` setting is also amazing because as the name suggests the plugin automatically generates checksums for all the files. That is amazingly practical and there is no reason not to do that. You can choose a few hash functions but I would suggest simply going with `sha512`.

## So how do a trigger a release now?

Simple! First tag your code with the following command

```
git tag 1.2.3
```

Now push the tag and drone will be on its way

```
git push --tags
```

Thats it! Hope it made your release journey easier 🙂
