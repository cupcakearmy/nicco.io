<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch('projects.json')
    const data = await res.json()
    if (res.status === 200) return { data }
    else this.error(res.status, 'Not found')
  }
</script>

<script>
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
