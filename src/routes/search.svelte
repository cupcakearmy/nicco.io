<script context="module">
  export async function preload() {
    const prebuilt = await this.fetch(`/search.json`).then((res) => res.json())
    return { prebuilt }
  }
</script>

<script>
  import lunr from 'lunr'

  import SearchResult from '../components/SearchResult.svelte'
  import SimplePage from '../components/SimplePage.svelte'

  export let prebuilt

  let needle
  let results = []

  async function search(needle) {
    if (!needle || !idx) {
      results = []
    } else {
      let found = idx.search(needle + '~1')
      if (!found.length) found = idx.search(needle + '*')
      results = found.slice(0, 20)
    }
  }

  $: idx = lunr.Index.load(prebuilt)
  $: search(needle)
</script>

<style>
  input {
    appearance: none;
    margin: 0;
    padding: 0.5rem;
    font-size: 1em;
    width: 100%;
    outline: none;
    border: 1px solid var(--clr-dark);
  }

  ul {
    margin-top: 2em;
    list-style: none;
    padding: 0;
  }
</style>

<SimplePage title="Search" expanded={false}>
  <input bind:value={needle} placeholder="needle" />
  <ul>
    {#each results as result (result.ref)}
      <SearchResult {result} />
    {/each}
  </ul>
</SimplePage>
