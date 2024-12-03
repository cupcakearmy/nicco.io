<script lang="ts">
  import Fuse from 'fuse.js'

  const { entries } = $props()

  const fuse = new Fuse(entries, {
    keys: ['text', 'url', 'extra'],
    includeScore: true,
    includeMatches: false,
    minMatchCharLength: 2,
    threshold: 0.5,
  })

  let needle = $state('')
  const results = $derived(fuse.search(needle))
</script>

<input bind:value={needle} />

<ol>
  {#each results as result}
    <li>
      <a href={result.item.url}>
        <span class="meta">
          {result.item.type}
        </span>
        <span class="meta">
          {(1 - result.score).toFixed(2)}
        </span>
        {result.item.title}
      </a>
    </li>
  {/each}
</ol>

<style lang="scss">
  input {
    background: white;
    border: 2px solid var(--clr-primary);
    border-bottom-width: 4px;
    padding: 1rem;

    &:focus,
    &:hover {
      outline: none;
      border-color: var(--clr-secondary);
    }
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 0.5rem;
  }

  li {
    margin-bottom: 1rem;
  }

  .meta {
    background: var(--clr-secondary);
    width: fit-content;
    padding: 0 0.25rem;
  }
</style>
