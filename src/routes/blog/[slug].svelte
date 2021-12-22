<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch, page }) => {
    return {
      props: {
        data: await fetch(`/api/posts/${page.params.slug}.json`).then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import SimplePage from '$lib/components/SimplePage.svelte'
  import PostAttributes from '$lib/components/PostAttributes.svelte'
  import WpAdapter from '$lib/components/WPAdapter.svelte'
  import type { GQLBasePostFragment } from '$lib/gql/gen'

  export let data: GQLBasePostFragment
</script>

<svelte:head>
  <title>Blog - {data.title}</title>
</svelte:head>

<SimplePage title={data.title} readable>
  <PostAttributes post={data} full />
  {#if data.content}
    <WpAdapter content={data.content} />
  {/if}
</SimplePage>
