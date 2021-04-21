<script>
  import { onMount } from 'svelte'
  export let icon

  $: src = `/icons/${icon}.svg`

  let html = null

  onMount(async () => {
    console.log(src)
    html = await fetch(src).then((res) => res.text())
  })
</script>

{#if html === null}
  <img {...$$restProps} {src} alt={icon} />
{:else}
  <span {...$$restProps}>
    {@html html}
  </span>
{/if}

<style>
  span,
  img {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    /* fill: currentcolor; */
    box-sizing: content-box;
    transform: translateY(0.2em);
  }
  span > :global(svg) {
    display: block;
  }
</style>
