<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const prerender = true
  export const load: Load = async ({ fetch, page }) => {
    return {
      props: {
        data: await fetch(`/api/posts/${page.params.slug}.json`).then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import type { Post } from '$lib/api'
  import SimplePage from '$lib/components/SimplePage.svelte'
  import PostAttributes from '$lib/components/PostAttributes.svelte'
  import WpAdapter from '$lib/components/WPAdapter.svelte'

  export let data: Post
</script>

<svelte:head>
  <title>Works</title>
</svelte:head>

<SimplePage title={data.title}>
  <PostAttributes post={data} full />
  {#if data.content}
    <WpAdapter content={data.content} />
  {/if}
</SimplePage>
