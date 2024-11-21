---
title: 'Write cross browser extensions without the tears'
date: '2021-12-28'
categories:
  - 'coding'
tags:
  - 'web-extension'
coverImage: './images/markus-spiske-8CWoXxaqGrs-unsplash-scaled.jpg'
---

Today I want to cover the process of developing browser extensions, from start to finish and submission to the chrome and firefox stores.  
According to Apple the new Safari will have better support for extensions, but as for now (Dec. 2021) this is not the case so we will focus on Firefox and Chromium based browsers.

This guide and the examples will be based on [Ora](https://github.com/cupcakearmy/ora), a web extension I wrote for both Firefox and Chrome.

We will not touch on the [controversial](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) manifest version 3. We'll stick to version 2.

<figure>

![](images/markus-spiske-8CWoXxaqGrs-unsplash-1024x683.jpg)

<figcaption>

Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/lego?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

## The Basics

Let's dive right in! A browser extensions is basically a series of small "websites". Logic is written in Javascript, styled in CSS, etc. This also means that we can use Vanilla JS, React, Svelte, whatever you prefer.

There are mainly 3 types of content you need to know.

1. **Content scripts**  
   These are files that you will be injected into existing tabs of the user. This can be `CSS` or `JS` files. They live on a tab level.
2. **Background scripts**  
   Here we have files that will run in the background, in a separate thread. They are not bound to any tab/window and have basically the same runtime as the browser itself. These are only `JS` scripts.
3. **Normal websites for your extension**  
   As we will se later, files inside your extensions will be served as if it was a server, so here you will code you settings page, dashboard and everything else. These are `HTML`, `CSS`, `JS`, images, etc. You name it.  
   Often this will be an options page, or a dashboard.

Almost everything I learned about browser extensions I learned from the [MDN Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions), they are amazing! If you are stuck this should be the first point to look.

## The Manifest

The first thing you'll need to know is a file called `manifest.json`.  
Here you will define all the contents, permissions, icons, name, etc. It's the entry point to your app. It's where your high level configuration lives.

```json
{
  "manifest_version": 2,
  "name": "Ora",
  "version": "0.8.1",
  "description": "See how much time you spend on each website and set limits"
}
```

## Icons

Every extensions has an icon. They are defined in the `manifest.json`.

`[icons](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)` is for the general icon, in the settings menu e.g.  
`[browser_action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)` is for the icon you'll see in the browser interface. Optionally you can specify `theme_icons` for dark mode support.

As a general rule you can always specify different sizes, but in my experience the easiest method is to just use a good high res (256 or 512px) png. SVGs support is quite hit or miss, would not recommend it.

Here I chose the same 512px png for both the extension and the interface.

```json
{
  "manifest_version": 2,
  ...
  "icons": {
    "512": "icons/watch.png"
  },
  "browser_action": {
    "default_icon": {
      "512": "icons/watch.png"
    },
    "default_title": "Ora Dashboard",
    "theme_icons": [
      {
        "light": "./icons/watch.png",
        "dark": "./icons/watch-alt.png",
        "size": 512
      }
    ]
  }
}
```

## Permission

Browser extensions are really powerful, but need to request permissions to unlock that power. Most of them you'll find on your way but the most common are `<all_urls>` for injecting scripts/styles into every page. another common one would be `tabs` to be able to get information on all tabs.

Try to keep permissions to the minimum possible and not request stuff you don't need. Permissions are listed when installing the extensions all at once, unlike on a phone where there is a prompt.

For ora I needed `<all_urls>` to inject scripts to block a website when the time limit was reached, `tabs` to count the time spent on websites and `unlimitedStorage` & `storage` for saving all that data.

```json
{
  "manifest_version": 2,
  ...
  "permissions": ["<all_urls>", "tabs", "unlimitedStorage", "storage"]
}
```

## Toolchain

We all hate it, bundlers, framework setup, etc. I will try to give you the most basic, painless setup. And by far that is a setup using `[parcel.js](https://parceljs.org/)`.

They have official [support for browser extensions](https://parceljs.org/recipes/web-extension/)! And it works really well.  
I would write some little guide, but TBH it would just duplicate their docs so I will just point you to the [official documentation](https://parceljs.org/recipes/web-extension/) which explains the steps perfectly.

The cool thing about parcel is that we use the `manifest.json` as entry point and just point to the sources we want to use inside of that. Parcel does the rest of the magic.

```json
{
  "manifest_version": 2,
  ...
  "background": {
    "scripts": ["./src/background/index.ts"]
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "run_at": "document_start",
      "js": ["./src/content/index.ts"]
    }
  ]
}
```

As you can see above we just use `ts` typescript files in our manifest and parcel will compile them for us. And those typescript files can include React, Svelte, whatever framework and it will just work. Amazing 😍

For svelte you'll need to add the [typescript transformer](https://github.com/orlov-vo/parcel-transformer-svelte). React works out of the box.

## Cross browser support without tears

For this we need to thank the good folks over at Mozilla. They created [webextension-polyfill](https://github.com/mozilla/webextension-polyfill).

```ts
import browser from 'webextension-polyfill'

const tabs = await browser.tabs.query({ active: true })
```

Just like that you will have code that will work in both Chrome and Firefox 99% of the time. This can be used in background scripts, client scripts and standalone pages.

## Building

```json
{
  ...
  "scripts": {
    "dev": "parcel watch --target dev --no-hmr ./manifest.json",
    "build": "parcel build --target prod ./manifest.json",
    "dist": "run-s clean build pack:*",
    "pack:zip": "zip -r ./ora.zip dist/prod/*",
    "pack:ff": "web-ext build -s dist/prod --overwrite-dest"
  },
  "targets": {
    "dev": {
      "sourceMap": {
        "inline": true,
        "inlineSources": true
      }
    },
    "prod": {}
  },
}
```

This is the `package.json` of Ora. How is the extension built?

1. Parcel bundler builds the raw web files, copies images, etc to the `./dist/prod` folder.
2. For Chrome we only need to zip it with `zip -r ./ora.zip dist/prod/*`.
3. For Firefox we use the mozilla own `[web-ext](https://github.com/mozilla/web-ext/)` tool with `web-ext build -s dist/prod --overwrite-dest`.  
   This results into a `web-ext-artifacts/ota-0.8.1.zip` file.

## Distributing

Now you can upload the normal zip file to the chrome web store after paying a one time 5$ fee and the web ext artefact to the mozilla add-on page.

Mozilla also requires for minified apps (which this one is) to also submit sources. Just zip the source code (without node_modules) and upload them along the minified one.

## Common use cases

I also want to add a few notes on common use cases that every extensions uses.

### Communication between content, background and other scripts.

The `[postMessage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)` API is the way to go. It's basically like IPC in the sense that you can send any serializable content from and to any of your scripts while listening for an answer.

### Storage / Persistence

Here you have a lot of options. The easiest way that works for most cases is using the `[storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)` API. Here you get access to `local` and `sync` storage interfaces. `local` is.. well local and `sync` is synced between browsers if the user is logged in. Choose whatever suits you best.

Another options, which is more powerful for more complex and data hungry is using something like `[Dexie.js](https://dexie.org/)` on top of IndexedDB. This is a full NoSQL kind of local database. A good options for data intensive extensions.

### Shortcuts

You can easily add keyboard shortcuts to your browser extension with the `[commands](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)` entry in the `manifest.json`. This has the added benefit that browsers provide an interface where users can customize them.

A little exception for opening the popup with a keyboard shortcut can be achieved with the `_execute_browser_action` command.

## Final thoughts

A browser extension is very fun project for a free Sunday and I'd recommend everyone to try it out, it's easier than you might think!
