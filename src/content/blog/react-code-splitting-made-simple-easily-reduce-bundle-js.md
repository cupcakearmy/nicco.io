---
title: 'React code splitting made simple. Easily reduce bundle.js'
date: '2019-07-21'
categories:
  - 'coding'
tags:
  - 'code-splitting'
  - 'react'
coverImage: './images/jason-abdilla-jZWmw6007EY-unsplash-scaled.jpg'
---

On average right now **around 200-500kb of JS is sent** down the pipe to the client. Way to much for my personal taste. Since a lot of website use react, today we will look how to reduce that in a simple and easy way, applicable to almost any app.

<figure>

![](images/jason-abdilla-jZWmw6007EY-unsplash-scaled.jpg)

<figcaption>

Photo by [Jason Abdilla](https://unsplash.com/@jabdilla_creative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/axe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

Let's start with why our `bundle.js` even grows that much. In my opinion there are 2 causes for this:

1. Devs mindlessly running `npm install`.
2. Loading **all** the JS, even if it is not needed in the current screen (e.g. the homepage).

## Carefully select packages

The first is not as easily solved if the app is already built. It requires your team to carefully choose your package and realise that often you don't need all the packages you are bundling. Often there is a lighter alternative.

As an example: a lot of websites use [momentjs](https://github.com/moment/moment/): It's an awesome library, **but it weights [231.7kb](https://bundlephobia.com/result?p=moment)!** There is an even cooler alternative: [DayJS](https://github.com/iamkun/dayjs). It requires only [6.5kb](https://bundlephobia.com/result?p=dayjs) and shares the same API as moment, so there is no rewriting code. There are a lot of similar examples that can be made. If you have a big module, just search for a smaller alternative.

#### TLDR;

1. Use the [webpack-bundle-analyser](https://github.com/webpack-contrib/webpack-bundle-analyzer) for already existent packages.
2. Search for lighter alternatives to big packages.
3. **Before installing** check on [bundlephobia](https://bundlephobia.com/) how big your desired package is.

## Code splitting & lazy loading

Now to the real deal. The classic problem is that big websites don't split the JS that is sent to the client. This means that the website might receive the JS for the shopping section, while you are only waiting for the homepage to load. This is unnecessary and **waiting for a page to load is always a frustrating experience**. We can do better 👍

How are we going to achieve this? **Code splitting & lazy loading.**  
We are going to use 2 native react functions, so no external packages.

- [lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
- [Suspense](https://reactjs.org/docs/code-splitting.html#suspense)

Lazy & Suspense require React version **16.6** or newer. Also this does not work with server side rendering.

**Lazy** is used to lazy load the component (...duh 🙄). This means that the code for the component is only downloaded when a component actually needs to be shown.

**Suspense** is a handy wrapper for displaying a fallback while the component is loading.

Let's see below how this is achieved:

**From**

```
import MyList from './MyList'

const App = () => <div>
    // ...
   <MyList />
   // ...
</div>
```

**To**

```
const MyList = lazy(() => import('./MyList'))

const App = () => <div>
    // ...
   <Suspense>
       <MyList />
   </Suspense>
   // ...
</div>
```

This is in fact all you need to do. Now our component `MyList` will lazy load on necessity. Awesome!

#### Bonus: Little helper function

This can get repetitive though, so here is a little helper that basically wraps everything into one function:

```
export const Split = path => props => {
	const Component = lazy(() => import(path))
	return <Suspense fallback={<span>Loading...</span>}>
			<Component {...props} />
	</Suspense>
}
```

Now we can simply do the following:

```
import { Split } from './utils.jsx'

const MyListLazy = Split('./MyList')

const App = () => <div>
    // ...
   <MyListLazy />
   // ...
</div>
```

There is a little codesanbox below with all the code if you wanna try for yourself (you should! 😉)

<iframe src="https://codesandbox.io/embed/code-splitting-1x3s3?autoresize=1&amp;fontsize=14&amp;module=%2Fsrc%2FApp.jsx" title="Code Splitting" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This concludes todays look at how to reduce the bundle size and use code splitting in react. Note that this does not work with server side rendering.
