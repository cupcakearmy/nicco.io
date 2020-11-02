<script context="module">
  export async function preload(page) {
    return {
      ...(await this.fetch('/api/posts.json').then((res) => res.json())),
      redirected: page.query.old !== undefined,
    }
  }
</script>

<script>
  import SimplePage from '../../components/SimplePage.svelte'
  import PostPreview from '../../components/PostPreview.svelte'

  export let data
  export let redirected
</script>

<style>
  div {
    margin-bottom: 6em;
    background-color: var(--clr-error);
    padding: 1em;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<SimplePage title="Blog">
  {#if redirected}
    <div>
      <h2>You have been redirected 🔄</h2>
      <p>
        Probably you are coming form my old blog (blog.nicco.io)
        <br />
        The article you were looking for is down here 👇
      </p>
    </div>
  {/if}
  {#each data as post}
    <PostPreview {post} />
  {/each}
</SimplePage>
