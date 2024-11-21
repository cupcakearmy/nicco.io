---
title: 'Rust in Python made easy'
date: '2020-01-01'
categories:
  - 'coding'
tags:
  - 'ffi'
  - 'python'
  - 'rust'
coverImage: './images/jonathan-chng-HgoKvtKpyHA-unsplash-scaled-1.jpg'
---

Python is truly amazing. With all that greatness generally there has to be a tradeoff and in the case of Python it's performance.

Luckily there is an easy way to run computation intensive work in Rust, which is of course orders of magnitude faster. Let's see how!

Overview

1. [hello world example](#simple)
2. [parameters & returns](#params-returns)
3. [rust data types compared to pythons ctypes](#types)
4. [lists / arrays](#lists)
5. [complex data types handling](#complex)

<figure>

![](images/jonathan-chng-HgoKvtKpyHA-unsplash-scaled-1.jpg)

<figcaption>

Photo by [Jonathan Chng](https://unsplash.com/@jon_chng?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/run?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

Lets assume we want to run the following python code in rust.

```
def add(a, b):
    return a + b

add(1, 2)  # 3
```

Lets see the steps we need to take to achieve this:

1. write some rust code
2. compile rust
3. import rust in python
4. run the rust code inside of python

## Hello world example

First lets create a new rust project by running:

```
cargo new rust_in_python
```

Then lets rename `src/main.rs` to `src/lib.rs` as we want a library and not standalone program.

```
mv src/main.rs src/lib.rs
```

Now we simply write a hello world function in rust

```
#[no_mangle]
fn hello() {
    println!("Hello from rust 👋");
}
```

For every function that need to be available to other languages (in our case Python) through foreign function call (ffi) we will need to add the `#[no_mangle]` flag to it.

The last step is to tell rust to compile to a dynamic library. To do so simply add the following to your `Cargo.toml` config file.

```
[lib]
crate-type = ["dylib"]
```

Now we are ready to build 🚀

```
cargo build --release
```

Now just create a `main.py` file and we can import and run our function.

```
from ctypes import CDLL

lib = CDLL("target/release/librust_in_python.dylib")
lib.hello()
```

And if you run it you will be greeted from rust. No need to install, the `ctypes` package is included the standard python library.

```
python main.py
```

## With return & parameters

Of course without giving parameters to the function and receiving its output this whole endeavour would be useless.

Before we start I would like to remind you that python is untyped whereas rust of course is strongly typed. This means that we will need to tell python what types the parameters and the return of our rust function we have.

First lets write the simple add function in rust

```
#[no_mangle]
fn add(a: f64, b: f64) -> f64 {
    return a + b;
}
```

Don't forget to build again 😉

```
cargo build --release
```

Now to the python part

```
from ctypes import CDLL, c_double

lib = CDLL("target/release/librust_in_python.dylib")

lib.add.argtypes = (c_double, c_double)
lib.add.restype = c_double

result = lib.add(1.5, 2.5)
print(result)  # 4.0
```

Lets see what is happening here:

With `lib.add.argtypes` we must pass a tuple specifying how python should parse the data we pass to the `add` function. The `ctypes` package includes a list of different types we can use. [See the full list here](https://docs.python.org/3.8/library/ctypes.html#fundamental-data-types).

The same happens with `lib.add.restype`. As you might have guessed this tells python what type is returned from the rust function.

In our case it's all `c_double` as we are using `f64` in rust.

## Data types in rust

Lets see some other data types and their equivalent in rust.

<table><tbody><tr><td><strong>Python</strong></td><td><strong>C</strong></td><td><strong>Rust</strong></td></tr><tr><td>c_bool</td><td>-</td><td></td></tr><tr><td>c_byte</td><td>char</td><td>i8</td></tr><tr><td>c_ubyte</td><td>unsigned char</td><td>u8</td></tr><tr><td>c_short</td><td>short</td><td>i16</td></tr><tr><td>c_ushort</td><td>unsigned short</td><td>u16</td></tr><tr><td>c_int</td><td>int</td><td>i32</td></tr><tr><td>c_uint</td><td>unsigned int</td><td>u32</td></tr><tr><td>c_long</td><td>long</td><td>i64</td></tr><tr><td>c_ulong</td><td>unsigned long</td><td>u64</td></tr><tr><td>c_float</td><td>float</td><td>f32</td></tr><tr><td>c_double</td><td>double</td><td>f64</td></tr></tbody></table>

## Arrays & List

So what about lists? Unfortunately I have not found a way to use Vectors for dynamic size arrays. So for now it's just fixed size arrays.

###### Rust

```
#[no_mangle]
fn sum(arr: [i32; 5]) -> i32 {
    let mut total: i32 = 0;
    for number in arr.iter() {
        total += number;
    }
    return total;
}
```

###### Python

```
from ctypes import CDLL, c_int

lib = CDLL("target/release/librust_in_python.dylib")

lst = [1, 2, 3, 4, 5]
# Create the memory of the list size
seq = c_int * len(lst)
arr = seq(*lst)

result = lib.sum(arr)
print(result)
```

## Classes and complex data types

Often it can be very useful to send and/or receive data in a structured, compact way. We can do this using structs.

###### Rust

```
#[repr(C)]
pub struct Point {
    pub x: f64,
    pub y: f64,
}

#[no_mangle]
fn greet_point(p: Point) {
    println!("x: {}, y: {}", p.x, p.y);
}
```

###### Python

```
from ctypes import CDLL, Structure, c_double

lib = CDLL("target/release/librust_in_python.dylib")

class Point(Structure):
    _fields_ = [
        ('x', c_double),
        ('y', c_double)
    ]


p = Point(x=1.2, y=3.4)
lib.greet_point(p)
```
