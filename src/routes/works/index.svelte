<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    return {
      props: {
        data: await fetch('/api/works/*.json').then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import type { GQLBaseWorkFragment } from '$lib/gql/gen'
  import SimplePage from '$lib/components/SimplePage.svelte'
  import Work from '$lib/components/Work.svelte'

  export let data: GQLBaseWorkFragment[]
</script>

<svelte:head>
  <title>Works</title>
</svelte:head>

<SimplePage title="Works">
  {#each data as work}
    <Work {work} />
  {/each}
</SimplePage>
