---
title: 'Tales of learning Go (from TS)'
date: '2021-04-17'
categories:
  - 'coding'
tags:
  - 'autorestic'
  - 'go'
  - 'restic'
coverImage: './images/mark-autumns-Ssr26I0QWVY-unsplash-scaled.jpg'
---

The story starts about a week ago (April 2021) when I finally got around rewriting a tool called [autorestic](https://github.com/cupcakearmy/autorestic). It's a CLI wrapper around restic, the amazing backup utility.  
This is not a guide or tutorial, just a diary of experiences of the process of coding Go for the first time. I'm far far far away from understanding Go at it's fullest, so veterans please correct me!

### Background

I started `autorestic` in Typescript as at the time it was the main language I was using and I simply love it. The issue was that JS requires a runtime and does not compile, which is not ideal for a standalone CLI. That ment using [_pkg_](https://github.com/vercel/pkg/) and while originally _pkg_ was quite an awesome project, the binaries are large (`70Mb+`) and the support is starting to dwindle with critical issues not being addressed. This meant that I couldn't create ARM builds due to a pending issue that had been open for more than a year by now.

The languages that came to mind were Rust, Go, Kotlin and Swift and I wanted to get to know a new language in the process. The choice came down to Go as it seemed to be easy to learn and is used extensively where I work at, so that was an added bonus.

What follows are the experiences I made as a mostly TS/JS/Python developer going into Go and learning as I went along. I did not have prior Go experience except some hello world examples here and there.

## Setup

I code on macOS so setup was easy: just run `brew install go` and be done with it. Or so I thought so. The whole `GOPATH` and `GOROOT` is not as straight forward. To this day I have not completely comprehended what they do so I will not even try explain it. I set mine to the following and everything worked after that.

```bash
export GOPATH="$HOME/.go"
export GOROOT=(brew --prefix go)"/libexec"
export PATH="$PATH:$GOPATH/bin:$GOROOT/bin"
```

VSCode on the other hand actually just works without an issue, which was pleasant. As I will discover later the whole tooling is a real pleasure to work with.

### Structure

There are almost no fixed rules for project structure, but many conventions within the community. A very good starting guide is taking a look at this repo: [golang-standards/project-layout](https://github.com/golang-standards/project-layout). There every "conventional" folder has an explanation of it's meaning.

A (kind of) weird standard in the Go world is not having a `src` folder, but rather everything is at root level of a project.

## Basics

Now to the actual coding. There is come getting used to so buckle up and join the ride.

#### Types

Being a typed language Go has a set of basic types and types built on top of them. Basic types are the classic `string`, `int`, `bool`, etc. Then we have arrays (fixed size) and slices (dynamic). We also get `map` and `struct`.

Complex types like maps and structs can be `nil` (null), while basic types have default values and cannot be `nil`. strings default to `""` and ints to `0`. This means that the only way in Go to check if a value has been initialised (e.g. in a struct) is if the value is different from the default one.

A gotcha for me was that in Go almost everything is copied by value and not reference. Therefore also the `range` oparator which is used to loop arrays, slices and maps will copy by value and not reference, which for JS and Pyton people will be confusing as there complex objects are always copied by reference.

#### Missing language features

Before you start searching "how do I do X in Go?" I will save you the time and give you a list of features that are **not** available in go.

- No ternary operator
- No optional/default function parameters
- No function overloading
- No generics
- No sum/union type

So don't bother searching for them, they are not there. Which at first seems quite limiting, and after a week still feel the same. If you ask the Go community the overwhelming answer is that it's by choice to keep the language "lean" and don't bloat it with unnecessary syntax. I'll get back to this point later.

#### Imports

In Go you try to group code by functionality, which is quite common in programming languages. These are called "packages" and the import structure is similar to Java. Nothing out of the ordinary. A little gotcha: Go cannot resolve cyclic imports. All in all they work quite well.

External dependencies have a native solution called _go modules_ and work as you would expect it. There is a descriptory file where all your dependencies are listed called `go.mod` and a lock file `go.sum`, no concerns here.

#### Error handling

One of the most obvious patterns in Go is the way errors are handled. Basically whenever a function can "throw" an error instead of _throwing_ and _catching_ in Go we return a nullable (`nil`) value and then check that.

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	if result, err := divide(4, 2); err != nil {
		fmt.Println("We have broken math")
	} else {
		fmt.Println("The result: ", result)
	}
}

func divide(x, y int) (int, error) {
	if y == 0 {
		return 0, errors.New("Cannot divide by 0")
	}
	return x / y, nil
}
```

This is definitely different to what I was used to, but I enforces error checking and I think it's actually not a stupid design concept. The only negative consequence of that is that you will write the following statement over and over and over and over again. Get's quite repetitive.

```go
if err != nil {
  return err
}
```

## Speed

What go lacks in features it makes up in speed. There is no questioning the ease of use and the effective time to code something can be quite low. There will be repetitive tasks, but go makes it possible to move at incredible speed. There is very little holding you back.

The compiler is super fast, which was one of the design goals of the language. Arguably that is not a difficult task to achieve though as the language has virtually no features a compiler needs to actually think about.

## Tooling

Tooling is one of the areas where Go really excels and I have yet to find a comparable language. Many things are opinionated, which I love. There is the default formatter, linter, compiler, etc. Everything simply works and has never stood in the way of coding and getting things done. It was a very refreshing experience, especially after coming from a Electron project where the whole bundling and rest was a real pain to deal with.

#### Cross compilation

Compiling for multiple targets is frankly to easy to be true. You simply pass two environment variables to the compiler and he does the rest. No matter if solaris, arm, mips, windows. It does it all just fine.

```bash
GOOS=linux GOARCH=arm go build main.go
GOOS=darwin GOARCH=amd64 go build main.go
# ...
```

## What does it feel like to write GO?

I have quite mixed feelings about Go. On one hand the tooling and speed really are compelling advantages. However the language omits too many features in favor of remaining as _lean_ as possible. Having to iterate an array manually just to check if it contains a given element feels really outdated and does not help readability. Also in go using constants is basically unheard of, making code harder to understand and review. Not having optional/default parameters for functions often leads to code duplication as it is way easier to copy paste than to write a "one fits all" function. This is mostly due to the unavailability of generics which make it impossible to write a general `includes(element)` function for arrays of slices for example.

Then again I completely rewrote my CLI tool from scratch in about a week, including cross compiling for multiple platforms while never having touched Go before. That is quite something and not many compiled langauges could have done this. And after getting used to the (many) limitations of the language it's fun to code Go.
