<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch, params }) => {
    return {
      props: {
        slug: params.slug,
        data: await fetch(`/api/postsByTags/${params.slug}.json`).then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import SimplePage from '$lib/components/SimplePage.svelte'
  import type { GQLPostsManyByTagQuery } from '$lib/gql/gen'
  import PostPreview from '$lib/components/PostPreview.svelte'

  export let slug: string
  export let data: GQLPostsManyByTagQuery['posts']['nodes']
</script>

<svelte:head>
  <title>Blog - {slug}</title>
</svelte:head>

<SimplePage title={slug}>
  {#each data as post}
    <PostPreview {post} />
  {/each}
</SimplePage>
