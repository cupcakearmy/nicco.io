<script context="module">
  import { getOne } from '../lib/wp'

  export async function preload() {
    const data = await getOne('pages', { slug: 'privacy' })
    return { data }
  }
</script>

<script>
  import WPAdapter from '../components/WPAdapter.svelte'
  import SimplePage from '../components/SimplePage.svelte'

  export let data
</script>

<SimplePage title="Privacy Policy">
  <WPAdapter content={data.content} />
</SimplePage>
