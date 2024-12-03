---
title: 'Why I love JS but sometimes I feel we shoot ourself in the foot.'
date: '2020-05-29'
categories:
  - 'general'
tags:
  - rant
---

Let's start by saying this: I absolutely love JS & Typescript, they are my favourite languages and I would not want to live without them.

Now that being said, whenever I look at Go or Python for example the quality of packages cannot be compared. This is I feel the biggest weakness of the JS ecosystem and is frustrating because it could be so much better.

## Quality vs Quantity

Basically this is my main problem with the ecosystem. Whenever we look at other languages generally speaking there is one, maybe two packages for each use case they are trying to solve. And there is a consensus inside of that coding community what the preferred tools should be.

In the NPM world there are always what feels like never ending alternatives that try to solve the same problems over and over again.

So an economist might think: "Why is this bad? Competition is always good as it leads to innovation when compared to a monopoly". While this is true in a market I feel it does not reflect perfectly in the world of NPM and open source projects where anyone can contribute and influence decisions and directions taken by a specific piece of software/package.

What is the consequence of this? Many abandoned, half-finished packages that need to be rewritten every now and then only to be left unmaintained again. Let the cycle repeat itself...

## Bundle work! Don't disperse it

What if instead of reinventing the wheel over and over again we tune the wheel we have so that it becomes the best, most versatile wheel for everyone. Fragmentation is always a huge amount of work and leads to half-backed projects that always have some downsides. From that downside a new project is born and again, the cycle continues.

## It's confusing for everyone and especially for beginners

Ok so lets say I need to do some API calls in my node server. Of course I'm not going to use the native API because it's low level and not very readable. So what do I choose? Do I install `axios` or `node-fetch`, maybe `request`? What about `isomorphic-fetch`? Or `superagent`?

This is a perfect example of the issue. They all try to solve the same very basic thing, in 5 different ways. Why cannot we have 1 or maybe 2? What if we could simply have the de facto library that does it all?

Some time ago a friend coming from Python asked me that question and I could not give him an answer. He was visibly confused. In python there is no discussion really: you install `requests` and it will support 99.9% of use cases anyone will ever have. And if something is missing it will be added. Simple.

Same thing with bundlers. `webpack`, `parcel`, `rollup` and now `snowpack`. Why?! Don't get me wrong, I'm sure all of them have some incredible smart engineering behind it, but what is the need of splitting the knowledge and not combine it to make something greater?

I would just wish that JS people could start to converge on some best practices to ease the life of everyone developing in this ecosystem.
