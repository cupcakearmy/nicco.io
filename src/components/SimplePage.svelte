<script>
  import PageTitle from './PageTitle.svelte'

  export let title = ''
</script>

<style>
  section {
    max-width: 30em;
  }
</style>

<PageTitle {title} />

<section>
  <slot />
</section>
