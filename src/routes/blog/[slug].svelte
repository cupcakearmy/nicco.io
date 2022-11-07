<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch, params }) => {
    return {
      props: {
        data: await fetch(`/api/posts/${params.slug}.json`).then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import PostAttributes from '$lib/components/PostAttributes.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'
  import Tags from '$lib/components/Tags.svelte'
  import WpAdapter from '$lib/components/WPAdapter.svelte'
  import Discussion from '$lib/components/Discussion.svelte'
  import type { GQLBasePostFragment } from '$lib/gql/gen'

  export let data: GQLBasePostFragment
</script>

<svelte:head>
  <title>Blog - {data.title}</title>
</svelte:head>

<SimplePage title={data.title} readable>
  <PostAttributes post={data} full />
  {#if data.content}
    <WpAdapter content={data.content} legend />
  {/if}
  <Tags tags={data.tags.nodes} />
</SimplePage>

<Discussion />
