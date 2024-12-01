---
title: 'The powerful ES6 proxy object'
date: '2019-05-31'
categories:
  - 'coding'
tags:
  - 'es6'
  - 'javascript'
  - 'proxy'
coverImage: './images/alina-grubnyak-1254785-unsplash-scaled.jpg'
---

Today: yet another ES6 feature that I think most people don't know about.

> "The **Proxy** object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."
>
> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

Let's dive right in! 🏄‍♂️

#### Basic example:

```tsx
const handler = {
  get: (obj, key) => (key in obj ? obj[key] : 42),
}

const proxy = new Proxy({ a: 1 }, handler)

console.log(proxy.a, proxy.b) // 1 42
```

We start with a plain object `{a: 1}` and we assign it a handler. Our handler intercepts the `get` statement of a normal object and we can define our own custom logic for it. In this case we return the value if it exists, otherwise a 42.

We can se that calling `proxy.b` will output the 42, as it is not set in the root object.

## The handler

The second argument of the Proxy function is what is called the **handler**. This is simply an object with functions that define the logic of the operations, which are called **traps** (as they get triggered). The available traps are as follows:

- get
- set
- has
- deleteProperty
- ownKeys
- apply
- construct

There are a few more, but these are the basic ones. Here is the [full list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#Methods_of_the_handler_object).

#### Some practical examples

```tsx
var handler = {
  set: (obj, key, value) => {
    if (key === 'wheels')
      if (!Number.isInteger(value) || value % 2 !== 0) throw new Error('Wheels need to come in pairs')
    obj[key] = value
  },
}

// 🚗
var car = new Proxy({}, handler)

car.wheels = 4
car.wheels = 3 // Throws an error
```

Here we can see that we can define constrains for the setter. In this case we say that the key `wheels` needs to be and integer and a multiple of 2. This is a trivial example, but we can imagine how useful this can be with forms.

```tsx
const validators = {
  username: /^[A-z]{3,}$/,
  password: /(?=.*[\d]).{8,}/,
}

const handler = {
  set: (obj, key, value) => {
    if (key in validators && validators[key].test(value)) obj[key] = value
    else throw new Error('Invalid input')
  },
}

const form = new Proxy({}, handler)

form.username = 'abc'
form.username = 'this contains spaces' // -> Error

form.password = 'atleast1digit'
form.password = 'withoutanydigitthiswillthrowanerror' // -> Error

form.something = true // -> Error, since it does not exist in the validator object
```

In this example we can validate an object from a form for example. We have a validator object that contains some regex. The Proxy then only allows keys that are inside of the validator and only if they pass the corresponding regex. Vary handy 👌

## In real life

This only available in ES6 (ES2015) but ~92% of the browsers [support it](https://caniuse.com/#feat=proxy). Some real life applications that make use of this are [MobX](https://github.com/mobxjs/mobx) (since v5.0).

In MobX this allows the developer to skip the tedious `mapStateToProps` and `mapDispatchToProps` and just let MobX handle it. Since with the help of proxies MobX can know what parts of the state are being used by listening on the `get` trap of the state and can then only render the components when the props they are using in the `render()` function are being used.

There a small package that does the same for the redux world: [https://github.com/dai-shi/reactive-react-redux](https://github.com/dai-shi/reactive-react-redux)

I hope this helped and was interesting! 👋
