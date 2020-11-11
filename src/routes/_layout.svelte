<script>
  import { onMount } from 'svelte'
  import { stores } from '@sapper/app'

  import Nav from '../components/Nav.svelte'

  export let segment
  let wrapper
  let main

  function resize() {
    wrapper.style.height = `${window.innerHeight}px`
  }

  const { page } = stores()
  let last = ''

  $: {
    const { host, path } = $page
    const full = host + path
    if (last !== full) {
      last = full
      if (main) setTimeout(() => (main.scrollTop = 0), 150)
    }
  }

  onMount(() => {
    const listener = window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener(listener)
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
    scroll-behavior: smooth;
  }

  @media (max-width: 30em) {
    main {
      padding: 1em;
    }
  }
</style>

<div bind:this={wrapper}>
  <Nav {segment} />
  <main bind:this={main}>
    <slot />
  </main>
</div>
