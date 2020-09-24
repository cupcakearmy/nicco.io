<script context="module">
  import { getAll, sortByAndMapDate } from '../lib/wp'

  export async function preload() {
    const data = await getAll('projects')
    return { data: sortByAndMapDate(data) }
  }
</script>

<script lang="ts">
  import SimplePage from '../components/SimplePage.svelte'
  import Project from '../components/Project.svelte'

  export let data
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<SimplePage title="Projects">
  {#each data as project}
    <Project {project} />
  {/each}
</SimplePage>
