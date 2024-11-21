---
title: 'A practical introduction to React Hooks'
date: '2019-05-03'
categories:
  - 'coding'
tags:
  - 'hooks'
  - 'javascript'
  - 'react'
coverImage: './images/matt-artz-353210-unsplash-scaled.jpg'
---

Since [React](https://reactjs.org/) 16.8 was published in February Hooks are now officially supported and the API finalised and stable. They arose around the idea of functional programming. In short: they allow to have state in functional components and with custom hooks (we'll have a look at those later) they allow us to reuse and share state logic between multiple components. This article assumes a basic understanding of React.

All the code shown can be found here: [https://git.nicco.io/cupcakearmy/guide-react-hooks](https://git.nicco.io/cupcakearmy/guide-react-hooks)

<figure>

![](images/matt-artz-353210-unsplash-1024x780.jpg)

<figcaption>

wrenches - new tools

</figcaption>

</figure>

#### What we will look at today

1. Class Components vs Functional Components
2. Native React hooks
   - `useState`
   - `useEffect`
   - `useRef`
3. Custom hooks
   - `useWindow`
   - `useApi` (The real power)

## 1\. Class vs Functional

Let's first have a look at the 'hello world' of react: A simple counter which we can increment or decrement.

###### Class

```
import React from 'react'


class SimpleClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        console.log('Lets goo 🚀')
        setTimeout(() => this.setState({ counter: 5 }), 2000)
    }

    componentDidUpdate() {
        console.log(this.state.counter)
    }

    render() {
        return <div>
            <div>{this.state.counter}</div>
            <br/>
            <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>Decrease</button>
            <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increase</button>
        </div>
    }
}
```

Easy! Now we will convert the snippet above to the functional equivalent with the help of hooks.

###### Hooks

```
import React, { useEffect, useState } from 'react'


const SimpleFC = () => {
    const [counter, setCounter] = useState(0)

    return <div>
        <div>{counter}</div>
        <br/>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
}
```

Awesome 🚀 Simple enough right?

## 2\. Native React hooks

### useState

Our constructor with `state` is gone and we have a simple `const [counter, setCounter] = useState(0)`.

How does this work? `useState` returns an array wich deconstructed gives us a getter and a setter. The parameter we pass to it is the initial value. That is all. Simple and useful.

### useEffect

How about the timeout and the `console.log`? Welcome `useEffect`!

`useEffect` takes a function and executes it every time the component updates. So it is basically `componentDidMount` and `componentDidUpdate` together.  
The second parameter determines when the function will be triggered. It expects an array and checks whether the variables inside it change.  
If no array is passed it will trigger every time the component gets updated and or mounted.  
This means that you can pass props into the array and it will effect only when those change. Also, if you pass an empty array it will trigger only once and is equivalent to `componentDidMount`.

```
useEffect(myFN)  // triggered every time the component gets updated
useEffect(myFN, []) // Only triggered
useEffect(myFN, [prop1, prop2]) // Gets triggered when either the props get changed
```

In our example from above we would use it as follows:

```
import React, { useEffect, useState } from 'react'


const SimpleFC = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCounter(5)
        }, 1000)
    }, [])

    useEffect(() => {
        console.log(counter)
    })

    return <div>
        <div>{counter}</div>
        <br/>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
}
```

### useRef

Now let's have a look at `useRef`. We will have a normal class based component and the equivalent functional one with the help of hooks.

###### Class

```
class RefClass extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.change = this.change.bind(this)
    }

    change() {
        this.myRef.current.style.backgroundColor = '#6ba7ee'
    }

    render() {
        return <div>
            <button onClick={this.change}>Change Me</button>
            <br/><br/>
            <div ref={this.myRef} style={{ width: 50, height: 50, backgroundColor: '#000000' }}/>
        </div>
    }
}
```

###### Hooks

```
const RefFN = () => {
    const rect = useRef()

    const change = () => rect.current.style.backgroundColor = '#6ba7ee'

    return <div>
        <button onClick={change}>Change Me</button>
        <br/><br/>
        <div ref={rect} style={{ width: 50, height: 50, backgroundColor: '#000000' }}/>
    </div>
}
```

That is huge improvement in terms of amount code and most importantly readability. `react.current` points to the Dom element, which we can then modify at our will.

As a side node: look how much cleaner we can have class functions. instead of needing binding the function to `this`, in functional components we just need to define them.

## 3\. Custom hooks

This is where the real power lies. With custom hooks react allows you to reuse stateful logic and share it between components. Very powerful.  
We will cover two examples:

1. Window size
2. Consume an API

### Window size

Assume you want to make a component dependent on the window size of the browser. With react hooks this is quick, easy and reusable.

###### hooks.js

```
export const useWindowSize = () => {
    const getCurrentSize = () => ({ height: window.innerHeight, width: window.innerWidth })

    const [size, setSize] = useState(getCurrentSize())

    useEffect(() => {
        const handle = () => setSize(getCurrentSize())
        window.addEventListener('resize', handle)
        return () => window.removeEventListener('resize', handle)
    })

    return size
}
```

###### component.jsx

```
import { useWindowSize } from '../Hooks'

const Custom = ()=> {
    const size = useWindowSize()

    return <div>
        Width: {size.width}
        <br/>
        Height: {size.height}
    </div>
}
```

As we can see we created a custom hook called `useWindowSize`. We now can use our own hook inside of other components.

Custom components are just arrow functions that use the native `useState` and `useEffect` and some custom logic you add.

Note the `return () => window.removeEventListener('resize', handle)` inside the effect function. You can return a function in the effect function that will get called whenever the hook will be unmounted. This allows us to do cleanup. In this case we stop listening for window size changes. Neat 💪

### API Hook

Last but definitely not least: API calls. I personally think this is where hooks really show their power. I'll show you the code first and then explain.

###### hooks.js

```
export const useCallApi = (url) => {
    const [data, setData] = useState()

    const update = () => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
    }

    useEffect(() => {
        update()
    }, [])

    return [data, update]
}
```

###### posts.jsx

```
import { useCallApi } from '../Hooks'


const Posts = () => {
    const [posts] = useCallApi(`https://jsonplaceholder.typicode.com/posts`)
    const [users] = useCallApi(`https://jsonplaceholder.typicode.com/users`)
    // ...

    if (!posts) return <div>Loading 🕰</div>

    return <div>
        {posts.map((post, i) => <div key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>)}
    </div>
}
```

What is happening? We created a custom hook that queries an API and returns the result. How? We pass a url to the hook and we get the data back.

Internally the hook uses `useState` to save the results. It executes the update functions once (because the use effect has an empty array as second parameter).

Now we can use the `useCallApi` hook in multiple components or many times inside the same component. Options are endless.
