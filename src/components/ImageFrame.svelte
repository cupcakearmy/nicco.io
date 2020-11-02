<script>
  import Image from './Image.svelte'

  export let src
  export let alt
</script>

<style>
  :global(img.cdn) {
    width: calc(100% - 0.25em);
    object-fit: cover;
    object-position: center;
    border: 0.125em solid var(--clr-primary);
    transition: var(--animation);
    transform: scale(1);
    margin: 0;
  }

  :global(img.cdn:hover) {
    transform: scale(1.1);
    margin: 1em 0;
  }
</style>

<Image crop class="cdn" {src} {alt} />
