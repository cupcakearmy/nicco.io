<script lang="ts">
  import PageTitle from './PageTitle.svelte'

  export let title = ''
  export let expanded = true
  export let readable = false
</script>

<PageTitle {title} {readable} />

<section class:expanded>
  <slot />
</section>

<style>
  section {
    max-width: 30em;
    margin-bottom: 4em;
  }

  section.expanded {
    margin-top: 5em;
  }
</style>
