<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    return {
      props: {
        prebuilt: await fetch('/api/search.json').then((r) => r.json()),
      },
    }
  }
</script>

<script lang="ts">
  import lunr from 'lunr'
  import { onMount } from 'svelte'

  import type { SearchResultItem } from '$lib/components/SearchResult.svelte'
  import SearchResult from '$lib/components/SearchResult.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'

  export let prebuilt: any
  let needle: string | null = null
  let results: SearchResultItem[] = []
  let input: HTMLInputElement

  const idx = lunr.Index.load(prebuilt)

  async function search(needle: string) {
    if (!needle || !idx) {
      results = []
    } else {
      let found = idx.search(needle + '~1')
      if (!found.length) found = idx.search(needle + '*')
      results = found.slice(0, 20)
    }
  }

  $: if (needle !== null) {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `/search?q=${needle ?? ''}`)
    }
    search(needle)
  }

  onMount(() => {
    needle = new URLSearchParams(window.location.search).get('q')
    input.focus()
  })
</script>

<SimplePage title="Search" expanded={false}>
  <input bind:this={input} bind:value={needle} placeholder="needle" />
  {#if needle && needle.indexOf('haystack') !== -1}
    <p>⛳️✨ Here is a flag for you. ✨⛳</p>
  {/if}
  {#if needle}
    <ul>
      {#each results as result (result.ref)}
        <SearchResult {result} />
      {/each}
    </ul>
  {/if}
</SimplePage>

<style>
  input {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    padding: 0.75rem;
    font-size: inherit;
    width: 100%;
    outline: none;
    border: 0.15rem solid var(--clr-primary);
    border-bottom-width: 0.5rem;
    border-radius: 0;
    background: inherit;
    color: inherit;
  }

  ul {
    margin-top: 2em;
    list-style: none;
    padding: 0;
  }
</style>
