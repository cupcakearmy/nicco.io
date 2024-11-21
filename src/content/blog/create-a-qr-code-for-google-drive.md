---
title: "Create a QR code for Google Drive"
date: "2022-03-17"
---

So you want to make a QR code to a google drive file? It's actually quite easy, I'll show you!

## 1\. Upload the file and get the shared link

As shown in the video below the first thing is to upload your file (in this case a PDF) and create a sharable link.

<figure>

<figcaption>

Uploading and generating a link for a google drive file

</figcaption>



</figure>

## 2\. Convert the link to a download link

```
https://drive.google.com/file/d/1LZ09_aJnGy1aHY0DEuOEFGU4mon2ijir/view?usp=sharing
```

If we simply use the provided link (example above) it won't download the file, but create a preview of it.

If we want a direct download we need to change it to that below:

```
https://drive.google.com/uc?export=download&id=1LZ09_aJnGy1aHY0DEuOEFGU4mon2ijir
```

To summarise:

```
https://drive.google.com/file/d/<id>/view?usp=sharing
⬇️
https://drive.google.com/uc?export=download&id=<id>
```

Note that the _`<id>`_ part will be different for your file. The rest is the same.

## 3\. Create the QR Code

To create a QR code there is a very good free website called: [the-qrcode-generator.com](https://www.the-qrcode-generator.com/). Here you simply paste the link and get your QR Code.

<figure>

![](https://api.nicco.io/wp-content/uploads/2022/03/QR-Big.svg)

<figcaption>

Big QR code

</figcaption>

</figure>

## 4\. Make the QR code smaller and track clicks

If you want to have a smaller and cleaner QR code you can use a URL shortener like [Cuttly](https://cutt.ly/) to do so. With Cuttly the URL gets shorter and you can see how many people clicked on it. The new link and QR code then look something like this:

```
https://cutt.ly/CSonJs9
```

<figure>

![](https://api.nicco.io/wp-content/uploads/2022/03/QR-Small.svg)

<figcaption>

Small QR code

</figcaption>

</figure>
