<script>
  export let letters = []
</script>

<style>
  span {
    font-size: 8vw;
    text-transform: uppercase;
    user-select: none;
    width: 1em;
    text-align: center;
    display: inline-block;
  }

  div {
    margin-left: -0.5em;
  }
</style>

<div>
  {#each letters as letter}
    <span>{letter}</span>
  {/each}
</div>
