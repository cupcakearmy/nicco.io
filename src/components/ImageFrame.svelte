<script context="module">
  import { initialize } from 'svelte-cloudinary'

  initialize({ cloud_name: 'cupcakearmy' })
</script>

<script>
  import { image } from 'svelte-cloudinary'

  export let src
  export let alt

  $: cleaned = src.replace('https://api.nicco.io', '/nicco')
</script>

<style>
  img {
    width: calc(100% - 0.25em);
    object-fit: cover;
    object-position: center;
    border: 0.125em solid var(--clr-primary);
    transition: var(--animation);
    transform: scale(1);
    margin: 0;
  }

  img {
    transform: scale(1.1);
    margin: 1em 0;
  }
</style>

<img use:image={{ src: cleaned, bind: { width: true }, lazy: true }} {alt} />
