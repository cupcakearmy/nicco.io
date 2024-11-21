---
title: "5 JetBrains tips'n'tricks I wish I'd known sooner"
date: '2019-07-03'
categories:
  - 'coding'
tags:
  - 'ide'
  - 'jetbrains'
coverImage: './images/cards-scaled.jpg'
---

Here are some small features that may not be apparent to the newer devs that leverage the JetBrain IDEs. Most of them I discovered by using the.

1. Double Shift for navigating your codebase
2. cmd/ctrl + shift + f for text search
3. Remote Interpreters
4. Syncing settings
5. Reformatting

<figure>

![](images/cards-1024x567.jpg)

<figcaption>

Photo by [Matt Flores](https://unsplash.com/@matdflo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

## Double Shift

For many including myself this is the primary way to navigate code and files. Simply press shift two times, type in the file, class or function you are searching for and press enter. This is by far the quickest and most accurate way to navigate code in any Editor or IDE I've tried so far.  
Do it once, and you will not go back.

## CMD + Shift + F

**Windows & Linux**: ctrl + shift + f

This is somewhat similar to 2x Shift. The main difference is that double shifts searches mainly for filenames and symbols (function names, class names, etc.) while CMD shift f functions more like a text search.

What makes this really powerful is that you can [regex search](https://www.jetbrains.com/help/idea/tutorial-finding-and-replacing-text-using-regular-expressions.html#Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions.xml), [mask files by extension](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-project.html#exclude_type), [exclude folders](https://www.jetbrains.com/help/webstorm/configuring-project-structure.html#022f3834) (e.g. build folders) and search only in specific directories.

If you ever _loose something in your code_ or _maybe your are new to the project_ and don't know where certain parts are located, **this is the way to find it.**

## Remote Interpreters

This is a huge one for me! JetBrains allows you tu run the code on remote machines. This extends also to all the packages you install, the shell in the terminal is automatically opened on the host.

Remote hosts can be either a machine in which you ssh into, a local docker container running a different version of the language that you need.

_You might ask why?_

1. Use a docker container with a specific version of node/python/php/etc. instead of installing it locally on your machine. Basically a virtual environment for every language. Amazing!
2. Maybe you want to run the code on a Raspberry Pi, which has a different architecture. So all the packages you install will be installed on the Raspberry and when you hit _command+r_ the code will execute not on your machine but you still get the logs. Incredible!

To configure **simply go to the** _**run**_ **menu and add a new remote interpreter**.

## Sync Settings across devices

This is very simple. You can sync all your settings, including plugins, to either your JetBrain account or your own git settings repository. When you open the IDE some where else, everything is back to how it was.

Enable by going to: File -> Sync IDE Settings

**Note:** The synchronisation is per-IDE-basis, so your WebStorm settings are not synced with your PyCharm settings of course.

## Reformatting

Yet again a one of the reasons why I can't go back to VSCode. For each language there is a TON of customisation possible when reformatting. You can decide how your spaces should look, commas, imports, semicolons, everything is completely up to you.

You can tinker around with it in the Settings under: Editor -> Code Style -> <your language>

**Bonus:** If you select on a folder in the project view, you can reformat all files inside it, quick and easy. This is especially useful if one has imported some external sources for example.

Thats it, I hope you found some of it useful and that you can enjoy the JetBrain cosmos even more 😉
