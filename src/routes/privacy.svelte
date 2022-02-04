<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    return {
      props: {
        data: await fetch('/api/pages/privacy.json').then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import WPAdapter from '$lib/components/WPAdapter.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'
  import type { GQLBasePageFragment } from '$lib/gql/gen'

  export let data: GQLBasePageFragment
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<SimplePage title={data.title} expanded={false}>
  {#if data.content}
    <WPAdapter content={data.content} legend />
  {/if}
</SimplePage>
