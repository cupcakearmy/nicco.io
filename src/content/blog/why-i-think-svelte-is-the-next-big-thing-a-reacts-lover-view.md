---
title: 'Why I think svelte is the next big thing: a reacts lover view'
date: '2020-10-29'
categories:
  - 'coding'
tags:
  - 'react'
  - 'svelte'
coverImage: './images/alessandra-caretto-cAY9X4rPG3g-unsplash.jpg'
---

The first thing I thought when I heard there is this new framework called "Svelte" was: F\*\*\* no, please, not again. Why? Why do we need yet another framework ffs. React is amazing, don't try to reinvent the wheel.

I was so wrong...

So maybe one of you is thinking the same thing. Why [Svelte](https://svelte.dev/)? What is all the fuzz about? Well.... let me tell you 🙂

This is not a tutorial, for that check the amazing [official tutorial](https://svelte.dev/tutorial/basics) which teaches you everything from the basics to more advanced stuff.

<figure>

![](images/alessandra-caretto-cAY9X4rPG3g-unsplash.jpg)

<figcaption>

Photo by [Alessandra Caretto](https://unsplash.com/@alessandracaretto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/wheel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

Why is there a wheel? Well quite simply: Svelte IS reinventing the wheel.  
You see: what are most of the frameworks doing nowadays? They provide a way to code user interfaces with a component approach. This makes a lot of sense because we can reuse them, they are boxed items that stand for them self. Modularizing and splitting up concerns make big apps easier to write and afterwards maintain.

What sets Svelte apart from a tecnical standpoint ist that it's foremost a compiler as opposed to a runtime like React or Vue. What does it mean? It means that all the reactivity is done at compile time and not in the browser. Svelte knows before hand what property can change and what doesn't. That's very powerful.

## Easy of use and simplicity

This in my opinion might be the biggest driver for svelte. The [official tutorial](https://svelte.dev/tutorial/basics) is great and well thought out. What stood out to me was how easy it was for non web people I know to get up and running in the matter of a day.  
Simplicity is really hard however Svelte abtracts everything you need away and breaks it down to simple `html`, `js` and `css`. The learning curve is... well more like a flat line you just need to step on.

## Taking the fun back to the web

Personally the greatest feat Svelte achieves is staing out of the way while supporting you, the developer in everything you need to do. It is never in the way, it always makes your life easier.

### Vue and React had a child

It is very clear that Svelte was inspired by both React and Vue picking the best features of both worlds. This is probably why Svelte is so amazing. It has the luxury to build on years of experience of what works, and what does not.

Inspired by React:

- Components are JS Objects

Inspired by Vue:

- 2 Way binding
- Syling
- Making ecosystem first party
- Single file components

Moslty "Unique" features:

- Class toggles
- Stores

## Styling

Styling in react sucks. There is no way around it. In Vue that problem is solved by simply having scoped css built-in. No need for preprocessors, since we have CSS Variables and namespacing is no longer an issue.

```svelte
<script>
	let title = 'Nietzsche Ipsum'
</script>

<style>
	h1 {
		color: #05f;
	}

	p {
		font-family: monospace;
	}

	a {
		color: initial;
		text-decoration: underline;
	}
</style>

<h1>{title}</h1>

<p>
	Virtues sexuality philosophy law chaos society evil strong self christianity sexuality truth. Revaluation convictions decrepit snare passion oneself decieve oneself. Right suicide grandeur fearful play. Right joy merciful transvaluation good truth derive evil contradict intentions. Self salvation faithful disgust marvelous transvaluation aversion.
</p>

<a href="http://nietzsche-ipsum.com/">Generate more!</a>
```

No need to worry that our styles will affect some other stuff and we don't need to pass around classNames from other files.

## Single File Components

`.svelte` files are just like `.vue` files and they contain everything: code (`js`/`ts`), markup (`html`) and styling (`css`). No need to separate files for styling which bloats every React project that does not want to rely on css-in-js which in my opinion is just garbage.

## 2 way binding

This alone will save you tons of time and makes implementing stuff more intuitive and fun.

```svelte
<script>
	let form = {
		username: '',
		password: ''
	}
</script>

<input bind:value={form.username} />
<input bind:value={form.password} />
```

Yes, it will sync the UI to the variables, but both ways. In react you need to either use some 3rd party lib or juggle `value` and `onChange` events.

This also works for parent - child props, so no need to write verbose update functions to be called from the children. Everyone hates those.

## Stores

So I truly hate Redux. It is the reason I've quit companies and unfortunately it is the way to go in react. In svelte we have build it stores and they are simply put: amazingly powerful and easy.

```svelte
// store/todos.js
import { writable } from 'svelte/store'
import axios from 'axios'

export const data = writable([])

export async function load() {
  const { data: d } = await axios({
    method: 'get',
    url: '/api/todos/',
  })
  data.set(d)
}
```

```svelte
<script>
  import { onMount } from 'svelte'

  import Todo from '../components/Todo.svelte'
  import { data, load } from '../store'

  onMount(() => {
    load()
  })
</script>

{#each $data as todo}
  <Todo {todo} />
{/each}
```

With a simple `$` in front of a store svelte will update the UI according to the store content. And we simply update it. No complex bootstrapping with context, dispatcher, acitons and so on.

## Class toggles

This is a feature I use all the time and it is just so useful. You can basically bind a value to toggle a css class, in this case `done`. No need to to string magic or, again, import some 3rd party module to manage our class names.

```svelte
<script>
	export let done = true;
</script>

<style>
	.done {
		text-decoration: line-through;
	}
</style>

<div class:done>
	Some task
</div>
```

## First party support

Another thing that I cannot stand in React and Svelte does right in my opinion is that in the react world everything is basically up to the community. Even the typing! That means that while there is more choice in theory, in practise it leads to a fragmented unmaintained ecosystem.

The Svelte is not afraid of incorporating tools from the community into the officials repos. I strongly believe that it is in everybodies interest that tooling and core functionality should always be first party code. Much like Vue does it.

## Concluding thoughts

First of all lets all thank Rich Harris which is the creator of Svelte.
