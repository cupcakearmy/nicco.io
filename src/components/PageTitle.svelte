<script>
  import SpacedLetters from './SpacedLetters.svelte'

  export let title = ''
  export let readable = false
</script>

<style>
  div {
    margin-top: calc(28vh - 3em);
    margin-bottom: 3em;
  }
</style>

<div>
  <h1>
    <SpacedLetters letters={title} {readable} />
  </h1>
</div>
