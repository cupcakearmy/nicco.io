<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
  }

  main {
    position: relative;
    padding: 3em;
    margin: 0 auto;
    box-sizing: border-box;
    flex: 1 0 auto;
    overflow: auto;
    max-width: calc(100% - 4em);
    max-height: 100vh;
  }

  @media (max-width: 30em) {
    main {
      padding: 2em;
    }
  }
</style>

<div>

  <Nav {segment} />
  <main>
    <slot />
  </main>
</div>
