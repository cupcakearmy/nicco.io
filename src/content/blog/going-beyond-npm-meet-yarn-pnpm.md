---
title: 'Going beyond NPM: meet Yarn & pnpm'
date: '2019-08-27'
categories:
  - 'coding'
tags:
  - 'javascript'
  - 'node'
  - 'npm'
  - 'pnpm'
  - 'yarn'
coverImage: './images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash-scaled.jpg'
---

If you are a JS developer you probably use NPM multiple times a day without thinking about it. It's the default package manager which ships with node.

But have you wondered what if there was another way of managing your (probably too many 😉) packages? We will look at [yarn](https://yarnpkg.com/en/) and [pnpm](https://pnpm.js.org/) as worthy rivals.

**Update** _27 Aug 2019 @ 21:23_  
As [this user](https://www.reddit.com/r/javascript/comments/cw64xt/going_beyond_npm_meet_yarn_pnpm/ey92a0i?utm_source=share&utm_medium=web2x) on reddit pointed out npm now supports offline installs too, so that part is the same for all three package managers. Also apparently the checksums, but I could now verify it.

**Update** _27 Aug 2019 @ 22:51_  
If you are having troubles with pnpm try using `pnpm i shamefully-flatten`. Thanks to [this reddit user](https://www.reddit.com/r/node/comments/cw64qq/going_beyond_npm_meet_yarn_pnpm/ey9aa1v?utm_source=share&utm_medium=web2x).

For the lazy readers: [Jump to the conclusion here](#conclusion).

<figure>

![](images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpg)

<figcaption>

Photo by [Ruchindra Gunasekara](https://unsplash.com/@ruchindra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

You might wonder now: why? _Why should I bother reading this when NPM works perfectly_? Is this just another run to the latest framework? Don't worry: there are actual reasons you might want to switch.

#### Speed!!... or the lack of it?

The biggest issue that plagues npm is speed. Unfortunately even with the latest version (6) npm is slow. If you ever had to delete the node_modules folder to do a clean install on a bigger project you will know what I mean. Fans start to spin, laptop gets warm and you can go read an article while npm chews on the dependencies.

## Yarn to the rescue

Yarn came along in the early days and you definitely have heard about it wandering across Github. Back in the days (before npm 5 with the `package-lock.json`) Yarn addressed the issues with consistency by being the first to generate a lockfile (`yarn.lock`). This file could be checked in and the devs would have a consistent dependencies across multiple machines.

#### Speed

Yarn is often twice as fast as npm. It's truly impressive and you need to see it for yourself to believe it. The CLI output is also way more human-friendly.

#### Offline

Every package version is only downloaded once, so if you happen to loose connection or need to download the same package again you will gain a substantial speed boost since they are cached locally.  
_See update at the top_.

#### yarn upgrade-interactive

This is incredible 😍. If you run `yarn upgrade-interactive` you get an interactive CLI where you can choose what packages to upgrade and which not. It's a simple thing, but one you cannot live without anymore if tried it once.

#### yarn why

Similar to the previous command this is a very handy cli goodie. simply run `yarn why some-package` and yarn will tell you why it was installed, from which dependency it came from, etc.

#### Lack of npx

Unfortunately Yarn lacks the `npx` equivalent of npm, which is the only drawback I encountered while using yarn. Other than that yarn is a very fast and a solid alternative to npm.

## PNPM: The underdog

I truly love this project so I might be biased. They basically implemented a thought I had a while back: **reuse the same packages across your computer**. Confused? Let me explain:

Have you ever measured the size of the your node_modules?

```
du -sh node_modules
# --> 816M   node_modules
```

What?! 0.8Gb for a react-native project?!  
Unfortunately that is a pretty common reality and **pnpm** aims to solve that.

PNPM links your packages with symlinks. This means that **the same version of a package only exists once** on your computer. If you ever install the same package twice, it will simply symlinked to your node_modules. 🚀  
[On top of that it's even faster than yarn.](https://github.com/pnpm/benchmarks-of-javascript-package-managers)

#### So perfection is achieved? Let's all switch to pnpm?

Unfortunately it's not that easy. If you start a new project you can probably go with pnpm, but with existing projects I had some problems with building my apps. So it's definitely experimental at best and should not be used without rigorous testing as it might break your app. pnpm also supports npx with `pnpx`.

## Conclusion Time

<table><tbody><tr><td></td><td><strong>Speed</strong></td><td><strong>NPX</strong></td><td><strong>Offline</strong></td><td><strong>Well supported</strong></td></tr><tr><td>npm</td><td>🐌</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>yarn</td><td>🚄</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>pnpm</td><td>🚀</td><td>✅</td><td>✅</td><td>❌</td></tr></tbody></table>

As you can see above there is no clear winner. NPM is the most compatible of course but really falls behind in terms of speed. **Yarn in my opinion is currently your best bet** and fallback to `npx your-command` when npx is needed.  
pnpm is an incredibly cool tool but is not ready yet for production. With react-native I can cause problems, but with the "normal" stacks it works very good. I will use pnpm for my personal projects from now on.
