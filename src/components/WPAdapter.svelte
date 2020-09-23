<script>
  export let content
</script>

<style>
  div :global(.alignfull) {
    width: calc(100vw - 6em);
    margin-left: -2em;
  }
  div :global(.alignwide) {
    width: calc(100% + 4em);
    margin-left: -2em;
  }

  div :global(figure img) {
    width: 100%;
    height: 100%;
  }

  div :global(figure) {
    margin: 0;
  }

  div :global(a) {
    border-bottom: 0.125em solid var(--clr-primary);
  }

  div :global(pre) {
    padding: 1em;
    background: #0000000d;
    overflow: auto;
  }

  div :global(code) {
    background: #00000012;
    padding: 0.25em;
  }
  div :global(pre code) {
    background: initial;
    padding: initial;
  }

  div :global(h1),
  div :global(h2),
  div :global(h3),
  div :global(h4),
  div :global(h5),
  div :global(h6) {
    margin: 0;
    margin-top: 3em;
    border-left: 0.2rem solid var(--clr-primary);
    padding-left: 0.5rem;
    margin-left: -0.7rem;
  }
</style>

<div>
  {@html content}
</div>
