<script lang="ts">
  import type { Post } from '$lib/api'

  import ImageFrame from '../components/ImageFrame.svelte'
  import PostAttributes from '../components/PostAttributes.svelte'

  export let post: Post
</script>

<a href={`blog/${post.slug}`} class:without={!post.post.featured}>
  {#if post.post.featured}
    <ImageFrame src={post.post.featured.sourceUrl} alt={post.post.featured.altText} />
  {/if}
  <PostAttributes {post} />
  <h2>
    {@html post.title}
  </h2>
</a>

<style>
  a {
    display: block;
    margin-bottom: 5em;
  }
  a > :global(img) {
    height: 12em;
  }

  h2 {
    margin-top: 0.25em;
    position: relative;
    top: 0;
    transition: var(--animation);
    background-color: var(--clr-light);
  }
  a:hover h2 {
    top: -1em;
    transform: scale(0.95);
  }

  a > :global(div) {
    opacity: 1;
    transition: var(--animation);
  }
  a:hover > :global(div) {
    opacity: 0;
  }

  a.without {
    border: 2px solid var(--clr-primary);
    padding: 5%;
    width: calc(100% + 10%);
    transform: translateX(-5%);
  }
</style>
