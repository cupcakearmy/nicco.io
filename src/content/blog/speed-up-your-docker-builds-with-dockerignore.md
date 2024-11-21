---
title: 'Speed up your docker builds with .dockerignore'
date: '2019-12-23'
categories:
  - 'coding'
tags:
  - 'docker'
coverImage: './images/thomas-kelley-t20pc32VbrU-unsplash-scaled-1.jpg'
---

So you ever wondered why your docker build takes so long to startup when all you do is adding a few files to your image and setting which command to run?

Fear no more! `.dockerignore` to the rescue ⚓️.

<figure>

![](images/thomas-kelley-t20pc32VbrU-unsplash-scaled-1.jpg)

<figcaption>

Photo by [Thomas Kelley](https://unsplash.com/@thkelley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/whale?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

Whenever you build a docker image the first thing you will always see is the following:

```bash
docker build -t my-image .
Sending build context to Docker daemon  203.2MB
Step 1/6 : FROM ...
```

The important thing to note is the context with a size of `203.2MB` in this case. What does it mean?

Every time a docker image gets built, it requires the context. By default it's simply the directory of your `Dockerfile`. Basically it's the folder from which you can add files to the image you are building.

This means that for each build, the docker client sends the whole directory to the docker engine to build.  
If you are unlucky this includes either the whole node_modules folder, maybe a virtual env folder for your python or simply everything in your dist folder. In my case it was a venv with 200+MB of data.

This slows down the process significantly and if you are iterating on a dockerfile making only a few tweak this can be very tearing.

> Waiting is the most boring (duh) and painful thing ever.
>
> Every person on this planet

## Solution: `.dockerignore`

Simply create a `.dockerignore` file inside of your context (basically in the same directory as your `Dockerfile`) and specify what to include, what to ignore. It works just like our trusted `.gitignore`.

Im my case I only wanted to have my `requirements.txt` and the `.py` files inside of my `src` folder.

###### .dockerignore

```
# Ignore everything
**

!/requirements.txt
!/src

**/__pycache__
```

If I run `docker build` again watch what happens:

```bash
docker build -t my-image .
Sending build context to Docker daemon  37.38kB
Step 1/6 : FROM ...
```

Awesome! The context shrunk from 200MB to under 50kB and the startup time of docker build was greatly reduced. This will help substantially if you have a lot of files, like e.g. a node_modules folder.
