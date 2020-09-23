<script context="module">
  import { getOne } from '../../lib/wp'
  export async function preload({ params }) {
    const { slug } = params
    const post = await getOne('posts', { slug })
    return { post }
  }
</script>

<script>
  import SimplePage from '../../components/SimplePage.svelte'
  import WPAdapter from '../../components/WPAdapter.svelte'
  import PostAttributes from '../../components/PostAttributes.svelte'

  export let post
</script>

<SimplePage title={post.title} expanded={false} readable>
  <PostAttributes {post} full />
  <WPAdapter content={post.content} />
</SimplePage>
