<script>
  import SpacedLetters from './SpacedLetters.svelte'

  export let title = ''
  export let readable = false
</script>

<style>
  div {
    margin-top: 8em;
    margin-bottom: 3em;
  }
</style>

<div>
  <h1>
    <SpacedLetters letters={title} {readable} />
  </h1>
</div>
