<script lang="ts">
  import { cdn } from '$lib/actions/cloudinary'

  export let src: string
  export let alt: string
</script>

<img use:cdn={src} {alt} />

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
