<script context="module">
  export async function preload() {
    return this.fetch('/api/works.json').then((res) => res.json())
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
