<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    return {
      props: {
        data: await fetch('/api/projects/*.json').then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import SimplePage from '$lib/components/SimplePage.svelte'
  import Project from '$lib/components/Project.svelte'
  import type { GQLBaseProjectFragment } from '$lib/gql/gen'

  export let data: GQLBaseProjectFragment[]
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<SimplePage title="Projects">
  {#each data as project}
    <Project {project} />
  {/each}
</SimplePage>
