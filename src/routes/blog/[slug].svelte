<script context="module">
  export async function preload({ params }) {
    return this.fetch(`/api/posts/${params.slug}.json`).then((res) => res.json())
  }
</script>

<script>
  import SimplePage from '../../components/SimplePage.svelte'
  import WPAdapter from '../../components/WPAdapter.svelte'
  import PostAttributes from '../../components/PostAttributes.svelte'

  export let data
</script>

<SimplePage title={data.title} expanded={false} readable>
  <PostAttributes post={data} full />
  <WPAdapter content={data.content} />
</SimplePage>
