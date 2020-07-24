<script>
  import SpacedLetters from './SpacedLetters.svelte'

  export let title = ''
</script>

<style>
  div {
    margin-top: 8em;
    margin-bottom: 3em;
  }
</style>

<div>
  <h1>
    <SpacedLetters letters={title} />
  </h1>
</div>
