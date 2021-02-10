<script context="module">
  export async function preload({ query }) {
    const prebuilt = await this.fetch(`/search.json`).then((res) => res.json())
    return { prebuilt }
  }
</script>

<script>
  import lunr from 'lunr'
  import { onMount } from 'svelte'

  import SearchResult from '../components/SearchResult.svelte'
  import SimplePage from '../components/SimplePage.svelte'

  export let prebuilt
  let needle
  let results = []

  const idx = lunr.Index.load(prebuilt)

  async function search(needle) {
    if (!needle || !idx) {
      results = []
    } else {
      let found = idx.search(needle + '~1')
      if (!found.length) found = idx.search(needle + '*')
      results = found.slice(0, 20)
    }
  }

  $: if (needle) {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, null, `/search?q=${needle || ''}`)
    }
    search(needle)
  }

  onMount(() => {
    needle = new URLSearchParams(window.location.search).get('q')
  })
</script>

<SimplePage title="Search" expanded={false}>
  <input bind:value={needle} placeholder="needle" />
  <ul>
    {#each results as result (result.ref)}
      <SearchResult {result} />
    {/each}
  </ul>
</SimplePage>

<style>
  input {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    padding: 0.5rem;
    font-size: 1em;
    width: 100%;
    outline: none;
    border: 2px solid var(--clr-primary);
    border-radius: 0;
  }

  ul {
    margin-top: 2em;
    list-style: none;
    padding: 0;
  }
</style>
