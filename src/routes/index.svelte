<script lang="ts" context="module">
  import type { GQLBaseMediaItemFragment } from '$lib/gql/gen'

  type Data = Record<'home', GQLBaseMediaItemFragment>
  export const load: Load = async ({ fetch }) => {
    const home: GQLBaseMediaItemFragment = await fetch('/api/media/home.json').then((r) => r.json())
    return { props: { data: { home } } }
  }
</script>

<script lang="ts">
  import type { Load } from '@sveltejs/kit'
  import SpacedLetters from '$lib/components/SpacedLetters.svelte'
  import Signature from '$lib/svgs/Signature.svelte'

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
    <Signature class="signature" />
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
  .right :global(.signature) {
    position: absolute;
    width: 50%;
    top: 0%;
    left: -8.5%;
    transform: rotate(-25deg);
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
