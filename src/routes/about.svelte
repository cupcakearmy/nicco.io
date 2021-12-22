<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    return {
      props: {
        data: await fetch('/api/pages/about.json').then((r) => r.json()),
        image: await fetch('/api/media/about-2.json').then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import WPAdapter from '$lib/components/WPAdapter.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'
  import type { GQLBaseMediaItemFragment, GQLBasePageFragment } from '$lib/gql/gen'
  import { cdn } from '$lib/actions/cloudinary'

  export let data: GQLBasePageFragment
  export let image: GQLBaseMediaItemFragment
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<SimplePage title={data.title} expanded={false}>
  {#if data.content}
    <WPAdapter content={data.content} />
    <img use:cdn={image.sourceUrl} alt="decoration" />
  {/if}
</SimplePage>

<style>
  img {
    position: absolute;
    z-index: -1;
    object-fit: contain;
    width: 24vw;
    height: 30vw;
    left: 35em;
    top: 12em;
    max-width: 25em;
  }

  @media (max-width: 55em) {
    img {
      position: initial;
      width: 100%;
      height: 100%;
      object-position: right;
      max-height: 20em;
      margin-top: 4em;
    }
  }
</style>
