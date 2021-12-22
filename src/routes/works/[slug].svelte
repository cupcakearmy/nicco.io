<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch, page }) => {
    return {
      props: {
        data: await fetch(`/api/works/${page.params.slug}.json`).then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import SimplePage from '$lib/components/SimplePage.svelte'
  import Work from '$lib/components/Work.svelte'
  import type { GQLBaseWorkFragment } from '$lib/gql/gen'

  export let data: GQLBaseWorkFragment
</script>

<svelte:head>
  <title>Works</title>
</svelte:head>

<SimplePage title="Works">
  <Work work={data} />
</SimplePage>
