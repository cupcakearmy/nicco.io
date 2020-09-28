<script context="module">
  export async function preload() {
    return this.fetch('/api/projects.json').then((res) => res.json())
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
