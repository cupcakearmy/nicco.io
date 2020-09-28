<script context="module">
  export async function preload() {
    return this.fetch('/api/posts.json').then((res) => res.json())
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
