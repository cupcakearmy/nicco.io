---
title: 'Cleanup downloaded Google Photos Takeout archives'
date: '2019-05-04'
categories:
  - 'general'
tags:
  - 'google-photos'
  - 'google-takeout'
  - 'icloud-photos'
  - 'migration'
coverImage: './images/rayan-almuslem-1302778-unsplash-scaled.jpg'
---

Recently I've been taking my tin foil hat a bit more seriously and since I mostly live in the Apple ecosystem (yes, you can judge me) the iCloud Photos felt like a pretty good alternative. Yes, it's still a cloud but the content [is encrypted](https://support.apple.com/en-us/HT202303) and most importantly Apple has no real economical incentive on data mining you data. They are far ahead in terms of privacy. With that out of the way let's go! 🚀

TLDR: I wrote this [cleaning script](https://gist.github.com/CupCakeArmy/51070b311e6fd0a3f2d793bee3350ede) (tested only on macOS) to remove all duplicates from the [Google Takeout](https://takeout.google.com/) folders.

The process seemed easy at first. Google offers an awesome tools for exporting data out of their servers. It's called [Takeout](https://takeout.google.com/). So basically you select the Google Photos service and let them create the archives. Then after a few hours you can download them.

Now at the time I had ~40gb worth of pictures and videos saved in Googles cloud, however the archives I downloaded where about ~90gb. I started looking into it and a lot of photos where duplicates and edited versions that google was keeping. In addition the folders where full of JSON metadata.

**time for cleanup 🧹**

Fortunately for us there is the awesome `find` command that will save our lives. Removing metadata and duplicates from more than ~50k files is impossible by hand.

First we need to remove all `.json` files:

```
find ./my_takeout_folder -name "*.json" -type f -delete
```

Then all the duplicates that contain a `(1)` at the end of the file.

```
# macOS
find -E ./my_takeout_folder -regex ".*\([0-9]+\).*" -type f -delete

# Unix (Thanks to Stravos F. for pointing that out ❤️)
find ./my_takeout_folder -regextype posix-extended -regex ".*\([0-9]+\).*" -type f -delete
```

All the edited photos by google

```
find ./my_takeout_folder -name "*edited*" -type f -delete
```

And lastly remove all the empty folders.

```
find ./my_takeout_folder -type d -empty -delete
```

You probably will have multiple folders because you will have to download multiple archives. Simply unpack them all into one folder and run the scripts on to that folder.

If you are to lazy to run them manually just get this script I wrote

<script src="https://gist.github.com/CupCakeArmy/51070b311e6fd0a3f2d793bee3350ede.js"></script>

Then...

```
chmod +x ./clean
./clean my_folder_with_all_the_google_takouts
```

Finally just drag and drop into the Photos app.
