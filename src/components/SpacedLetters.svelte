<script>
  export let letters = []
  export let even = false
  export let readable = false
</script>

<style>
  span {
    width: 1em;
    text-align: center;
    display: inline-block;
  }

  div {
    font-size: min(8vw, 2.5em);
    text-transform: uppercase;
    user-select: none;
    letter-spacing: 0.35em;
  }

  div.even {
    font-size: 8vw;
  }

  div.readable {
    letter-spacing: initial;
    font-size: 4rem;
  }
</style>

<div class:even class:readable>
  {#if even}
    {#each letters as letter}<span>{letter}</span>{/each}
  {:else}{letters}{/if}
</div>
