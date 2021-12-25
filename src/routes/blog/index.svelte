<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const prerender = true
  export const load: Load = async ({ fetch }) => {
    return {
      props: {
        data: await fetch('/api/posts/*.json').then((r) => r.json()),
        tags: await fetch('/api/tags/*.json').then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import SimplePage from '$lib/components/SimplePage.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import type { GQLBasePostFragment, GQLBaseTagFragment } from '$lib/gql/gen'
  import Tags from '$lib/components/Tags.svelte'

  export let data: GQLBasePostFragment[]
  export let tags: GQLBaseTagFragment[]
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<SimplePage title="Blog">
  <b>Explore Tags</b>
  <Tags {tags} />
  <div />

  {#each data as post}
    <PostPreview {post} />
  {/each}
</SimplePage>

<style>
  div {
    margin-bottom: 3em;
  }
</style>
