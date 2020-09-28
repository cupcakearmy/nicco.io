<script>
  import { onMount } from 'svelte'

  import Nav from '../components/Nav.svelte'

  export let segment
  let wrapper

  onMount(() => {
    wrapper.style.height = `${window.innerHeight}px`
  })
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  main {
    position: relative;
    padding: 3em;
    margin: 0 auto;
    box-sizing: border-box;
    flex: 1 0 auto;
    overflow: auto;
    max-width: calc(100% - 4em);
    height: 100%;
  }

  @media (max-width: 30em) {
    main {
      padding: 1em;
    }
  }
</style>

<div bind:this={wrapper}>
  <Nav {segment} />
  <main>
    <slot />
  </main>
</div>
