---
title: '5 useful Typescript tricks'
date: '2019-10-06'
categories:
  - 'coding'
tags:
  - 'tips-and-tricks'
  - 'typescript'
coverImage: './images/amador-loureiro-BVyNlchWqzs-unsplash-scaled.jpg'
---

Typescript is a godsend. It is very easy to get started with and for most developers there is no way back once they get the hang of it. Sometimes it can get pretty advanced and intimidating though.

This is why I decided to share 5 of my favourite typescript tips and tricks you might have needed in the past. Some are super basic, some are bit more advanced.

**Update** _07 Okt 2019 @ 07:53_  
Reddit user [jakeboone02](https://www.reddit.com/r/typescript/comments/de17xs/5_useful_typescript_tricks_small_tricks_you_might/f2t9prk?utm_source=share&utm_medium=web2x) found an error in the ternary code.

**Update** _06 Okt 2019 @ 15:06_  
Reddit user [smeijer87](https://www.reddit.com/r/typescript/comments/de17xs/5_useful_typescript_tricks_small_tricks_you_might/f2qveub?utm_source=share&utm_medium=web2x) found an error in the code for null coalescing.

**Update** _06 Okt 2019 @ 14:47_  
A fiendly reader pointed out excluding interface type are called discriminated unions.

1. [react higher-order components](#hoc)
2. [smarter constructor](#constructors)
3. [type checking functions](#type-checking-function)
4. [discriminated unions](#excluding)
5. [optional chaining & null coalescing](#future)

<figure>

![](images/amador-loureiro-BVyNlchWqzs-unsplash-scaled.jpg)

<figcaption>

Photo by [Amador Loureiro](https://unsplash.com/@amadorloureiroblanco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/type?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

## Higher-order Components

In React [higher order components (HOC)](https://reactjs.org/docs/higher-order-components.html) are very useful tools. Generally they are used to wrap some layout or functionality to some other component. They are simply functions that return another component: basically the same pattern as decorators.

In typescript it can be confusing how to write them _maintaining the right props_ after wrapping the original component. Here you are:

```
import React from 'react'

function withLayout<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return (props: P) => (
    <div id='app'>
      <Header/>
      <WrappedComponent {...props}/>
      <Footer/>
    </div>
  );
}
```

Note also that when using the `withLayout` you don't need to specify the generic type explicitly, as typescript will inherit from the function parameter. Super handy!

## Smarter constructors

Let's start by the building block this is based on. It's a basic Javascript trick, not a typescript exclusive at first.

```
class Pizza {
  slices: number
  name: string

  constructor(init) {
    Object.assign(this, init)
  }
}

const pizza = new Pizza({
  slices: 8,
  name: 'Margherita',
})
```

What is happening here? With the super handy `Object.assign` simply assigns the object to the class. This is super handy when classes have many constructor parameters. But this is NOT type safe as your IDE/Editor will tell you. How do we fix this?

```
import { NonFunctionKeys } from 'utility-types'

class Pizza {
  slices!: number
  name?: string

  constructor(init: Pick<Pizza, NonFunctionKeys<Pizza>>) {
    Object.assign(this, init)
  }

  eat() {
    this.slices = 0
  }
}

const pizza = new Pizza({
  slices: 8,
  name: 'Margherita',
})
```

Let me explain what happens:  
This leverages the awesome [utility-types](https://github.com/piotrwitek/utility-types) package. We first take all the keys that are not a function, so we don't overwrite the `eat` method of the class. Then we pick those from the general Pizza type.

This means that `slices` will be required, while `name` will be optional, as they are defined.

## Type-checking Functions

Did you know you can write functions to tell typescript what type something is? This is awesome!

Suppose we have the following interfaces

```
interface Food {
  name: string
}

interface Pasta extends Food {
  type: 'Spaghetti' | 'Fusilli'
}

interface Pizza extends Food {
  slices: number
}
```

Now we could write a `cook` function that accepts both Pasta and Pizza. Typescript itself cannot differentiate between the too.

```
function cook(what: Food) {
  if(what === Pizza) ????
}
```

Fortunately there is a nice solution built into typescript.

```
function isPizza(x: Food | Pizza): x is Pizza {
  return x.hasOwnProperty('slices')
}

function isPasta(x: Food | Pasta): x is Pasta {
  return x.hasOwnProperty('type')
}


function cook(plate: Food) {
  if (isPizza(plate)) {
    // Plate is now of type Pizza
    putInTheOven(plate)
  }
  if (isPasta(plate)) {
    // Plate is now of type Pasta
    putInThePan(plate)
  }
}
```

Here we define two functions that return `x is Sometype` and return a boolean value based on the input. It's up to you of course to define it properly, but this can be very useful in various situations.

## Discriminated unions

```
type Sqlite = {
  type: 'sqlite',
  database: string,
}

type PostgreSQL = {
  type: 'postgresql',
  database: string,
  host: string,
  post?: number
}

type PossibleConfigs = Sqlite | PostgreSQL

function initialize(config: PossibleConfigs) {}
```

This might look like a simple one, but I often see people putting those sorts of types all into the same interface. By separating the different type of objects you make sure that they are safe. Also the autocomplete will thank you.

## Optional Chaining & Null Coalescing

This are future features that will be introduced in Typescript 3.7 that are very useful and will not be lived without after the release in early November 2019.

Optional chaining is an obvious shorthand. Every time you need to check if a property (especially if nested) exists, you need to do lots of repetitive checking. No more!

```
a && a.b && a.b.c // 🤬

a?.b?.c // 🚀
```

Null coalescing is also a very useful shorthand. You all know the `||` shorthand, often used to initialise a variable if no value is given.

```
const option = something || 'default'

// Sugar for
const option = !!something ? something : 'default'
```

The problem is with values that are actual values, but result as falsy.

```
false || 'default'      // => 'default'
0     || 'default'      // => 'default'
```

This is where the Null Coalescing comes in.

```
const option = something ?? 'default'  // 🚀

// Sugar for
const option = (x === null || x === undefined)
  ? 'default'
  : x

0     ?? 'default'      // => 0
false ?? 'default'      // => false
```

Basically it only assign the default value if the provided one is `null` or `undefined` so that values like `false` or `0` don't get overwritten.
