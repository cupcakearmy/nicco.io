<script lang="ts">
  import { onMount } from 'svelte'
  export let icon: string

  $: src = `/icons/${icon}.svg`

  let html: string | null = null

  onMount(async () => {
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
    box-sizing: content-box;
    transform: translateY(0.2em);
  }
  span > :global(svg) {
    display: block;
  }
</style>
