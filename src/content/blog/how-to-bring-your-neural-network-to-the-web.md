---
title: 'How to bring your neural network to the web'
date: '2020-02-10'
categories:
  - 'coding'
tags:
  - 'ai'
  - 'keras'
  - 'machine-learning'
  - 'tensorflow'
coverImage: './images/natasha-connell-byp5TTxUbL0-unsplash-scaled-1.jpg'
---

Artificial intelligence, neural networks, machine learning. I don't know which of them is the bigger buzzword. If we look past the hype there are some actually very interesting use cases for machine learning in the browser.

**For the lazy that simply what to just to the source code**  
[Here is the git repo](https://github.com/cupcakearmy/mnist) for you :)  
**Or simply go to the [finished website](https://mnist.nicco.io/)**

Today we will look on how to train a simple mnist digit recogniser and then export it into a website where we then can see it in action. Therefore this article will be split into three parts

1. Training
2. Export & import the pre-trained model into a website
3. Build a simple website where we can use the model.

Also I am not going to explain what machine learning is, as there are enough guides, videos, podcasts, ... that already do a much better job than I could and would be outside the scope of this article.

So the first thing we need to understand is that we will not train the model in the browser. That is a job for GPUs and the goal here is only to use a pre-trained model inside of the browser. Training is a much more resource intensive task than simply using the net.

## Training the model

So, the first step is to actually have a model. I will do this in tensorflow 2.0 using the now included keras api. This means Python 🎉

The code below is basically an adapted version of the [keras hello world example](https://keras.io/examples/mnist_cnn/).  
If you want to run the code yourself (which you should!) simply head over to [Google Colab](https://colab.research.google.com), create a new file and just paste the code. There you can run it for free on GPUs which is pretty dope!

```py
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Flatten
from tensorflow.keras.layers import Conv2D, MaxPooling2D
from tensorflow.keras.utils import to_categorical

(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Reshaping for channels_last (tensorflow) with one channel
size = 28
print(x_train.shape, x_test.shape)
x_train = x_train.reshape(len(x_train), size, size, 1).astype('float32')
x_test = x_test.reshape(len(x_test), size, size, 1).astype('float32')
print(x_train.shape, x_test.shape)

# Normalize
upper = max(x_train.max(), x_test.max())
lower = min(x_train.min(), x_test.min())
print(f'Max: {upper} Min: {lower}')
x_train /= upper
x_test /= upper

total_classes = 10
y_train = to_categorical(y_train, total_classes)
y_test = to_categorical(y_test, total_classes)

# Make the model
model = Sequential()
model.add(Conv2D(64, (3, 3), activation='relu', input_shape=(size,size, 1), data_format='channels_last'))
model.add(Conv2D(32, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))
model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(total_classes, activation='softmax'))

model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train
model.fit(x_train, y_train,
          batch_size=32,
          epochs=12,
          verbose=True)

score = model.evaluate(x_test, y_test, verbose=0)
print('Test loss:', score[0])
print('Test accuracy:', score[1])
```

We can run this and we will get a pretty good accuracy. The MNIST dataset ist not very hard to train.

## Export the model

Now the conventional way to save a model is to use the `model.save("model.h5")` method provided by keras. This uses the h5 file format.  
Unfortunately this is not compatible with tensorflow-js. So we need another way.

There is a package called tensorflowjs for python (confusing right? 😅) that provides the functionality we need

```ts
import tensorflowjs as tfjs

tfjs.converters.save_keras_model(model, './js')
```

It save the model data inside the `./js` folder ready to be used.  
Inside there you will find a `model.json` that basically describes the structure of the model and something like `group1-shard1of1.bin` that contains the fitted weights.

## Import the model

Now we are ready to import that. First we need to install the `@tensorflow/tfjs` package.

```ts
import * as tf from '@tensorflow/tfjs'

let model

tf.loadLayersModel('/model.json').then((m) => {
  model = m
})
```

Ok how do I use that now?

```ts
const tensor = tf.tensor(new Uint8Array(ourData), [1, 28, 28, 1])
const prediction = model.predict(tensor)
```

**What is happening here?**  
In order to predict a value we first need a tensor (vector) the same shape as our original input with which we trained the model with. In our case that is 1x28x28x1.
Also we will convert our pixel data into a `Uint8Array`.

## Using the canvas element to draw and predict numbers

I'm not gonna talk about what bundler, etc. I'm using. If you interested simply have a look at the [git repo](https://github.com/cupcakearmy/mnist).

First lets write some basic html for the skeleton of our page.

```html
<html>
  <head>
    <style>
      * {
        box-sizing: border-box;
        font-family: monospace;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      body > div {
        text-align: center;
      }

      div canvas {
        display: inline-block;
        border: 1px solid;
      }

      div input {
        display: inline-block;
        margin-top: 0.5em;
        padding: 0.5em 2em;
        background: white;
        outline: none;
        border: 1px solid;
        font-weight: bold;
      }
    </style>
  </head>

  <body>
    <div>
      <h1>MNIST (Pretrained)</h1>
      <canvas id="can" width="28" height="28"></canvas>
      <br />
      <input id="clear" type="button" value="clear" />
      <br />
      <input id="test" type="button" value="test" />
      <br />
      <h2 id="result"></h2>
      <a href="https://github.com/cupcakearmy/mnist">
        <h3>source code</h3>
      </a>
    </div>

    <script src="./tf.js"></script>
    <script src="./canvas.js"></script>
  </body>
</html>
```

Next we need come short code for drawing on a canvas.  
The code is adapted from [this stackoverflow answer](https://stackoverflow.com/a/8398189) and reduced to the only the basics we need.

In essence it's a canvas that listens on our mouse events and fills the pixels with black. Nothing more.

```ts
/* jslint esversion: 6, asi: true */

var canvas,
  ctx,
  flag = false,
  prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  dot_flag = false

var x = 'black',
  y = 2

function init() {
  canvas = document.getElementById('can')
  ctx = canvas.getContext('2d')
  w = canvas.width
  h = canvas.height

  canvas.addEventListener(
    'mousemove',
    function (e) {
      findxy('move', e)
    },
    false
  )
  canvas.addEventListener(
    'mousedown',
    function (e) {
      findxy('down', e)
    },
    false
  )
  canvas.addEventListener(
    'mouseup',
    function (e) {
      findxy('up', e)
    },
    false
  )
  canvas.addEventListener(
    'mouseout',
    function (e) {
      findxy('out', e)
    },
    false
  )

  window.document.getElementById('clear').addEventListener('click', erase)
}

function draw() {
  ctx.beginPath()
  ctx.moveTo(prevX, prevY)
  ctx.lineTo(currX, currY)
  ctx.strokeStyle = x
  ctx.lineWidth = y
  ctx.stroke()
  ctx.closePath()
}

function erase() {
  ctx.clearRect(0, 0, w, h)
}

function findxy(res, e) {
  if (res == 'down') {
    prevX = currX
    prevY = currY
    currX = e.clientX - canvas.offsetLeft
    currY = e.clientY - canvas.offsetTop

    flag = true
    dot_flag = true
    if (dot_flag) {
      ctx.beginPath()
      ctx.fillStyle = x
      ctx.fillRect(currX, currY, 2, 2)
      ctx.closePath()
      dot_flag = false
    }
  }
  if (res == 'up' || res == 'out') {
    flag = false
  }
  if (res == 'move') {
    if (flag) {
      prevX = currX
      prevY = currY
      currX = e.clientX - canvas.offsetLeft
      currY = e.clientY - canvas.offsetTop
      draw()
    }
  }
}

init()
```

And not the glue to put this together is the piece of code that listens on the "test" button.

```ts
import * as tf from '@tensorflow/tfjs'

let model

tf.loadLayersModel('/model.json').then((m) => {
  model = m
})

window.document.getElementById('test').addEventListener('click', async () => {
  const canvas = window.document.querySelector('canvas')

  const { data, width, height } = canvas.getContext('2d').getImageData(0, 0, 28, 28)

  const tensor = tf.tensor(new Uint8Array(data.filter((_, i) => i % 4 === 3)), [1, 28, 28, 1])
  const prediction = model.predict(tensor)
  const result = await prediction.data()
  const guessed = result.indexOf(1)
  console.log(guessed)
  window.document.querySelector('#result').innerText = guessed
})
```

Here we need to explain a few things.  
`canvas.getContext('2d').getImageData(0, 0, 28, 28)` simply returns a flattened array of the pixels from the point (0,0) to (28,28).

Then, instead of simply passing the data to the tensor. we need to do some magic with `data.filter` in order to get only every 3rd pixel. This is because our canvas has 3 channels + 1 alpha, but we only need to know if the pixel is black or not. We do this by simply filtering for the index mod 4

```ts
data.filter((_, i) => i % 4 === 3)
```

Lastly we need to interpret the result. `prediction.data()` return an array with 10 items. Because we have trained it that way that we only have 10 possible outcomes. 10 Digits right?  
Well in that case we simply search in which position in the array we have a 1 and the index is out solution.  
We search for a 1 because we only have floats from 0 to 1. So 1 is the maximum.

I hope this helped you understand the process better. It was pretty confusing at first for me too 😬
