<script lang="ts" context="module">
  import type { MediaItem } from '$lib/api'

  export const prerender = true

  type Data = Record<'signature' | 'home', MediaItem>
  export const load: Load = async ({ fetch }) => {
    const signature: MediaItem = await fetch('/api/media/signature.json').then((r) => r.json())
    const home: MediaItem = await fetch('/api/media/home.json').then((r) => r.json())
    return { props: { data: { signature, home } } }
  }
</script>

<script lang="ts">
  import SpacedLetters from '$lib/components/SpacedLetters.svelte'
  import type { Load } from '@sveltejs/kit'

  export let data: Data
</script>

<svelte:head>
  <title>Niccolò Borgioli</title>
</svelte:head>

<div class="wrapper">
  <div class="left" style="z-index: 3;">
    <h1>
      <SpacedLetters letters="Niccolò" even />
      <SpacedLetters letters="Borgioli" even />
    </h1>

    <p>Design & Development</p>
  </div>

  <div class="right" style="z-index: 2;">
    <img srcset={data.home.srcSet} alt="decoration" class="home" />
    <img srcset={data.signature.srcSet} alt="signature" class="signature" />
  </div>
</div>

<style>
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .left {
    flex: 1 0 auto;
    max-width: 64vw;
  }

  .right {
    position: relative;
    top: 5vh;
  }

  p {
    font-size: 4vw;
    margin: 0;
  }

  img.home {
    width: min(100%, 33vw);
    object-fit: contain;
    object-position: left;
    max-height: 65vh;
  }
  img.signature {
    position: absolute;
    width: 50%;
    top: -6%;
    left: -10%;
    transform: rotate(-8deg);
  }

  @media (max-width: 50em) {
    .wrapper {
      flex-direction: column;
    }

    .left {
      flex: initial;
    }

    .right {
      left: 1rem;
    }

    img.home {
      width: auto;
      height: 100%;
      max-height: calc(90vh - 35vw - 5vh);
      max-width: 90%;
    }
  }
</style>
