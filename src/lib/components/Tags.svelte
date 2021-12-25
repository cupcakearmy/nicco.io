<script lang="ts">
  import type { GQLBaseTagFragment } from '$lib/gql/gen'
  import Tag from './Tag.svelte'

  export let tags: readonly GQLBaseTagFragment[]
  export let rows: number = 1

  $: height = rows * 2
</script>

<div style="height: {height}em;">
  {#each tags as { slug, name, count }}
    <Tag {name} {count} href="/blog/tags/{slug}" />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    overflow: auto;
    align-items: center;
    justify-content: flex-start;
    margin: 0 -0.25rem;
  }

  div::-webkit-scrollbar {
    display: none;
  }
  div {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
