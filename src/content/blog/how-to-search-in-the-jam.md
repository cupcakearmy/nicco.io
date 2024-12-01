---
title: 'How to search in the JAM'
date: '2020-12-06'
categories:
  - 'coding'
tags:
  - 'jam-stack'
  - 'lunr'
  - 'search'
  - 'svelte'
---

So a lot (me included) now are building JAM stack landing pages, shops, full-stack apps, etc. and while you can have a backend of course not all of them have. For those who don't: **How do we search?**

So there is the obvious [Google Programmable Search Engine](https://programmablesearchengine.google.com/about/) but that looks bad and it not really customizable. The results are very good, it's google after all. However for those who want something more custom: Here's one way how.

A working example can found right here [nicco.io/search](https://nicco.io/search) 😉  
We will look at the following:

1. How to implement the search
2. Search Accuracy & Precision
3. Performance & Size

<figure>

![Telescope](images/uriel-soberanes-gCeH4z9m7bg-unsplash.jpg)

<figcaption>

Photo by [Uriel Soberanes](https://unsplash.com/@soberanes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/telescope?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

We can't rely on a backend as discussed above, so the magic will happen at build time, like everything in the JAM-verse.

I've decided to go with the free and open source [lunr.js](https://lunrjs.com/) which is a simple but still quite powerful search engine that can run in the client.

```
const idx = lunr(function () {
  this.ref('name')
  this.field('text')
  this.add({ name: 'A', text: 'Lorem...' })
})
const results = idx.search('Lor*')
```

The first question that probably will pop out in your head is: "How will lunr be able to know what is on our website?" Here is where our work begins.

## Roadmap

1. Aggregate all the data of your site
2. Prebuild the index and make it available as static JSON
3. Load `lunr.js` into your site and start searching

## Preparing the Index

So I'm using [Sapper](https://sapper.svelte.dev/) for this blog so the examples will be based on it, but the same principle applies to all JAM tech.

First we need to aggregate all our data. In my case this means all the single pages, blog entries, projects and works. So I created a `/src/routes/search.json.js` file and got to work.

```
import lunr from 'lunr'

import { getAll } from '../lib/wp'

function removeHTML(s) {
  return s.replace(/<.*?>|\s+|&#\d+;/g, ' ').trim()
}

async function convertForIdx(type, fields = []) {
  // Load the data from Wordpress
  const items = await getAll(type)
  // Map only the fields we need and are relevant
  const defaults = ['title', 'content', 'slug']
  return items.map((item) => ({
    url: `${item.type}/${item.slug}`,
    data: [...defaults, ...fields].map((field) => removeHTML(item[field])).join(' '),
  }))
}

export async function get(req, res) {
  const all = await Promise.all([
    convertForIdx('projects', ['description']),
    convertForIdx('pages'),
    convertForIdx('posts'),
    convertForIdx('works', ['role']),
  ])

  const idx = lunr(function () {
    this.ref('url')
    this.field('data')

    all.flat().forEach((doc) => this.add(doc))
  })
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(idx))
}
```

First I get all the data from the Wordpress backend and for each item I select at least the `title` and `content` as I want them to be searchable. Then we remove any html tags with a dirty regexp and finally we build the index.

When we call `JSON.stringify(idx)` the precomputed index will be serialized to JSON. Otherwise every client would had to compute that on their CPU, wasting cycles and possibly battery. We don't want that.

Now I have the "search model" ready. You can have a look: [nicco.io/search.json](https://nicco.io/search.json)

## Integrating the search

It's time to integrate the search into the actual website 🚀

```
<script context="module">
  export async function preload() {
    const prebuilt = await this.fetch(`/search.json`).then((res) => res.json())
    return { prebuilt }
  }
</script>

<script>
  import lunr from 'lunr'

  import SearchResult from '../components/SearchResult.svelte'

  export let prebuilt

  let needle
  let results = []

  async function search(needle) {
    if (!needle || !idx) {
      results = []
    } else {
      let found = idx.search(needle + '~1')
      if (!found.length) found = idx.search(needle + '*')
      results = found.slice(0, 20)
    }
  }

  $: idx = lunr.Index.load(prebuilt)
  $: search(needle)
</script>

<input bind:value={needle} placeholder="needle" />
<ul>
  {#each results as result (result.ref)}
    <SearchResult {result} />
  {/each}
</ul>
```

The first thing we do is load our preloaded `/search.json` and loading into an instance of `lunr`. This only need to happen once, once the index is loaded we ready to go.

```
const idx = lunr.Index.load(prebuilt)
```

For the searching itself `lunr` has quite a [few options](https://lunrjs.com/guides/searching.html). The most relevant for me where the wildcard and fuzzy search. While wildcard is good for when we don't have completed a word yet, fuzzy helps us with typos.

```
const fuzzy = idx.search(needle + '~1') // foo~1
```

While not explicitly said in the docs I'm guessing they use the [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance), which means `~1` will replace at most 1 char.

```
const wildcard = idx.search(needle + '*') // fo*
```

Wildcard are straight forward. `lunr` supports any kind: `*oo`, `f*o` and `fo*`.

The result is an array with the `ref` field so you can find the related item and a `score`. They are already sorted by score, so basically you just need to write a for loop.

## Search Quality

Now the accuracy and precision are of course on par with Google, but way good enough for a blog or a smaller site. However in 1h you can add search to your JAM site without much work and you stay google free.  
Also this approach gives you all the artistic liberties over the design.

## Performance & Size

Since we are prebuilding and packaging the whole site into one big `JSON` file it's worth taking a look at the size of the index.

For this I took the [Iliad by Homer](https://gutenberg.org/ebooks/6130) and slitted it up into different amount of pieces to simulate the amount of pages. At the same tame, the more pieces, the smaller the single content on one "page".

Please not that it's ~1mb of plain text so it's quite a lot.  
You can get the source code for the "test" [here](https://gist.github.com/cupcakearmy/242b54ee6b1a914896390c91846aa4d4).

### Variable size documents

<figure>

![](https://api.nicco.io/wp-content/uploads/2020/12/Lunr-Index-Size-Compresion.svg)

<figcaption>

Graph of Lunr Index size

</figcaption>

</figure>

As you can see, with `1000` each around `1.15k` in size we end up with a compressed size of `563 KiB` which starts to get big.

### A more real example

Here is an example where each document is around `10k` in size. Roughly double the text amount needed for this blog post. Then we add an ever increasing amount of documents to the index and watch it grow.

<figure>

![](https://api.nicco.io/wp-content/uploads/2020/12/Lunr.js-Index-Size-10k-Document-Size.svg)

<figcaption>

Chart of 10k sized documents building the index.

</figcaption>

</figure>

The results are very different of course. Please note the the second graph has a logarithmic scale! If we compare the compressed size at `500` documents we have `494kb @2.3k/doc` vs `1.09MiB @10k/doc`. Basically double, which is not that bad if we consider that the documents are around 5 times bigger.

Hope you enjoyed and learned something, take care ❤️
