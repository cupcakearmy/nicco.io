<script context="module">
  import { getAll } from '../lib/wp'

  export async function preload() {
    const data = await getAll('works')
    return { data }
  }
</script>

<script>
  import SimplePage from '../components/SimplePage.svelte'
  import Work from '../components/Work.svelte'

  export let data
</script>

<svelte:head>
  <title>Works</title>
</svelte:head>

<SimplePage title="Works">
  {#each data as work}
    <Work {work} />
  {/each}
</SimplePage>
