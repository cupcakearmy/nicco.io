<script context="module">
  export async function preload() {
    return this.fetch('/api/pages/privacy.json').then((res) => res.json())
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
