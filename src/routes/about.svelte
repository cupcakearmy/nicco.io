<script context="module">
  export async function preload() {
    return this.fetch('/api/pages/about.json').then((res) => res.json())
  }
</script>

<script>
  import WPAdapter from '../components/WPAdapter.svelte'
  import SimplePage from '../components/SimplePage.svelte'

  export let data
</script>

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

<svelte:head>
  <title>About</title>
</svelte:head>

<SimplePage title="About" expanded={false}>
  <WPAdapter content={data.content} />
  <!-- {@html data.content} -->
  <img src="/images/about.jpg" alt="decoration" />
</SimplePage>
