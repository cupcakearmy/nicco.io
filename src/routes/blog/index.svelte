<script context="module">
  import { getAll } from '../../lib/wp'

  export async function preload() {
    const data = await getAll('posts')
    return { data }
  }
</script>

<script>
  import SimplePage from '../../components/SimplePage.svelte'
  import PostPreview from '../../components/PostPreview.svelte'

  export let data
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<SimplePage title="Blog">
  {#each data as post}
    <PostPreview {post} />
  {/each}
</SimplePage>
