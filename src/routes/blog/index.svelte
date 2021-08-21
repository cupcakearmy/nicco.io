<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const prerender = true
  export const load: Load = async ({ fetch }) => {
    return {
      props: {
        data: await fetch('/api/posts/*.json').then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import type { Post } from '$lib/api'
  import SimplePage from '$lib/components/SimplePage.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'

  export let data: Post[]
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<SimplePage title="Works">
  {#each data as post}
    <PostPreview {post} />
  {/each}
</SimplePage>
