---
title: 'A sane and efficient guide for consuming GraphQL endpoints in Typescript'
date: '2021-12-31'
categories:
  - 'coding'
tags:
  - 'code-generation'
  - 'graphql'
  - 'typescript'
coverImage: './images/clayton-robbins-Ru09fQONJWo-unsplash-scaled.jpg'
---

GraphQL is becoming common practice in the wild, while I feel the workflow with Typescript is still not straight forward. I want to propose one way to go about it and hopefully make your next Typescript GraphQL project a joy to work with!  
Lets dive deeper 🤿.

I created a tiny [companion repository](https://github.com/cupcakearmy/blog-typescript-graphql) if you want to check out the code and try it out.  
Or check out the [finished demo](https://blog-typescript-graphql.vercel.app/).

<figure>

![](images/clayton-robbins-Ru09fQONJWo-unsplash-1024x683.jpg)

<figcaption>

Photo by [Clayton Robbins](https://unsplash.com/@claytonrobbins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@claytonrobbins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

## Intro

First we need to decide on what do we want (and probably need)

- Editor support for syntax highlighting `gql` and `.graphql` files.
- Strict type safety for our client.
- Easy tooling & workflow

So our workflow will look something like this:

```
GrapQL API -> Schema -> Queries & Mutations -> Typescript -> Client
```

For this article we'll build a minuscule one pager using the [SpaceX Land GraphQL API](https://api.spacex.land/graphql/) to display some space travel data.

## Editor setup

The setup will be be for VSCode. For that we first install the [GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql). This will enable us to have warnings and autocompletion inside of `gql` tags and `.graphql` files.

We need to add a `.graphqlrc.yml` file at the root with the following content:

```
schema: https://api.spacex.land/graphql/
```

## Writing Queries & Mutations

Now onto the real stuff.  
We want to take our endpoint, generate types and queries from it that can then be used by Typescript safely. To do that we will:

1. Setup generators for Schema, Queries, Mutations & SDK.
2. Write some Queries & Mutations
3. Generate the SDK
4. Consume the SDK

### Setup

There is this amazing project called `@graphql-codegen` which is a collection of tools for helping you generating various things from GraphQL. Let's install:

```
# Generators
pnpm i -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request
# For the SDK
pnpm i -D graphql graphql-request graphql-tag
```

I will assume my GraphQL stuff will live under `./src/lib/gql`

We will create a top level configuration file to handle all of our generation step called `codegen.yaml`. Ignore the `config` option for now, I will explain that later

```
schema: https://api.spacex.land/graphql/
documents: "src/**/*.graphql"
generates:
  ./src/lib/gql/gen.ts:
    plugins:
      - "@graphql-codegen/typescript"
      - "@graphql-codegen/typescript-operations"
      - "@graphql-codegen/typescript-graphql-request"
    config:
      maybeValue: "T"
      typesPrefix: GQL
      immutableTypes: true
      useTypeImports: true
      avoidOptionals: true
```

The property `schema` does not need an explanation.  
`generates` has 3 plugin enabled, one for the general types, another for queries and mutations and the last one to generate us a ready to use SDK and will save it under `./src/lib/gql/gen.ts`.  
`documents` is a glob that will find all our GraphQL files we write and generate the according code.

### Creating Queries

Now let's create a `src/lib/gql/root.graphql` file and write some queries, all autocompleted of course!

```
query LaunchpadsMany {
  launchpads(limit: 10) {
    id
    name
    location {
      name
    }
    successful_launches
    status
  }
}

query LaunchByYear($year: String!) {
  launches(find: { launch_year: $year }) {
    mission_id
    mission_name
    launch_date_utc
    rocket {
      rocket_name
    }
  }
}
```

### Let magic do it's thing

```
pnpm exec graphql-codegen
```

This will look at all our custom queries and mutations and generate us a ready to consume SDK that is completely typed. Amazing!

### Leverage the new SDK

```
// src/lib/gql/index.ts

import { GraphQLClient } from 'graphql-request'
import { getSdk } from './gen'

const client = new GraphQLClient('https://api.spacex.land/graphql/')
export const SDK = getSdk(client)
```

```
import { SDK } from '$lib/gql'

const data = await SDK.LaunchByYear({ year: '2021' })
```

You can also use the generated types to explicitly set them

```
import { SDK } from '$lib/gql'
import type { GQLLaunchByYearQuery } from '$lib/gql/gen'

const data: GQLLaunchByYearQuery = await SDK.LaunchByYear({ year: '2021' })
```

Every thing is typed now, I can't pass a number to the `year` variable or use return data that does not exist. Typescript will error on me. This not only gives us autocompletion but also the safety of what we are doing.

### Configuration options

I promised I would come back to it at some point.

```
schema: ...
generates:
    ...
    config:
      maybeValue: "T"
      typesPrefix: GQL
      immutableTypes: true
      useTypeImports: true
      avoidOptionals: true
```

There are [many options](https://www.graphql-code-generator.com/plugins/typescript#config-api-reference) for the generators, but I think these are quite sensible defaults.

`maybeValue` is `T | null` as default, but since we only use our queries which are type safe we can just remove uncertainty and use the correct type straight away.

`avoidOptionals` same thing as the `maybeValue`, just with `prop:?`. Don't want that.

`typesPrefix` is useful if you have some own type specifications that you don't want to clash with. I like to prefix all my generated GraphQL stuff with `GQL` to keep it tidy.

`immutableTypes` i prefer using an immutable type, with basically adds a `readonly` to every property. This way we are sure we are not editing data on the client.

`useTypeImports` this uses `import type` whenever possible.

## Final thoughts

I hope this made your GraphQL life a bit easier, it definitely did for me and it's way more fun to consume GraphQL API this way. Also something worth mentioning is that you can use the `@graphql-codegen/typescript-generic-sdk` package instead of the `@graphql-codegen/typescript-graphql-request` if you want to do the network requests yourself. It's easy to use but if you don't really have a reason just stick with the `graphql-request` one I'd say.
