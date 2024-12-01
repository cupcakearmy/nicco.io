---
title: 'Supporting & detecting dark mode in the browser'
date: '2020-01-07'
categories:
  - 'coding'
tags:
  - 'css'
  - 'dark-mode'
  - 'media-query'
coverImage: './images/davisco-5E5N49RWtbA-unsplash-scaled-1.jpg'
---

How do you detect if a user of your website has a preference for light or dark theme? Or maybe has not chosen at all?

We will look at a few ways how to detect and handle dark modes in 2020:

1. [Pure CSS](#pure-css)
2. [JS](#js)
3. [React](#react)

## Pure CSS

First lets have a look how we can do this using only CSS. There is a new css media query that is supported by [almost any browser](https://caniuse.com/#feat=prefers-color-scheme) right now.  
**prefers-color-theme**

###### Example Time

```css
.box {
  background: #eee;
}

@media (prefers-color-scheme: dark) {
  .box {
    background: #000;
  }
}

@media (prefers-color-scheme: light) {
  .box {
    background: #fff;
  }
}
```

Just like we use media queries for device width we can easily target specific CSS in case the user has a specific preference.

For completeness, if the user has no preference you can use the media query `@media (prefers-color-scheme: no-preference)`.

## JS

#### Simple

So how do we do the same thing in JS? There is a little helper called `window.matchMedia` ([also widely supported](https://caniuse.com/#feat=matchmedia)) wich takes a media query and tells us if the media query is true of false.

###### Example

```tsx
const isDark = window.matchMedia('(prefers-color-scheme: dark)')
isDark.matched // true or false
```

That simple.

#### Reactive

If we want to go reactive, the `matchMedia` function also allows us to set a listener, so every time the setting changes, we get notified and can act accordingly.

###### Example

```tsx
const isDark = window.matchMedia('(prefers-color-scheme: dark)')
isDark.addListener((event: MediaQueryListEvent) => {
  event.matches // true or false
})
```

## React

And of course react. We love it, we use it. So I made [a little library](https://github.com/cupcakearmy/use-light-switch) because all the libs I found for react did not include typescript typing!! 🤕

Of course it comes with hooks 🎣.

```bash
yarn add use-light-switch
```

### `useLightSwitch()`

This is the basic usage.

```tsx
import { Mode, useLightSwitch } from 'use-light-switch'


const Simple: React.FC = () => {
    const mode = useLightSwitch()

    if (mode === Mode.Dark) ...

    return ...
}
```

### `useModeSelector()`

This is the more useful one IMO.

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { useModeSelector } from 'use-light-switch'

const App: React.FC = () => {
  const selected = useModeSelector({
    light: { color: 'green', name: 'Light' },
    dark: { color: 'red', name: 'Dark' },
    unset: { color: 'blue', name: 'Unset' },
  })

  return (
    <div>
      <p>Try switching your dark mode in macOS or Windows</p>
      <div
        style={{
          padding: '1em 2em',
          backgroundColor: selected.color,
        }}
      >
        {selected.name}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, window.document.getElementById('root'))
```
