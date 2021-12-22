<script lang="ts">
  import type { GQLBasePostFragment } from '$lib/gql/gen'
  import { readingTimeInMinutes } from '$lib/utils'
  import dj from 'dayjs'

  export let post: GQLBasePostFragment
  export let full = false

  function format(date: string) {
    return dj(date).format('MMM D, YYYY')
  }

  $: created = format(post.date)
  $: modified = format(post.modified)
</script>

<div class="attributes">
  <div>
    {created}
    {#if full && created !== modified}<br /> <small>Last update: {modified}</small>{/if}
  </div>
  {#if post.content}
    <div>~ {readingTimeInMinutes(post.content)} min</div>
  {/if}
</div>

<style>
  .attributes {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    margin-top: -0.125em;
  }
</style>
