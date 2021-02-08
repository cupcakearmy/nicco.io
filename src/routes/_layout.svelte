<script>
  import { onMount } from 'svelte'
  import { stores } from '@sapper/app'

  import { scroll } from '../lib/scroll'
  import Nav from '../components/Nav.svelte'
  import Loading from '../components/Loading.svelte'

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

  function updateScroll(e) {
    const el = e.target
    const percentage = el.scrollTop / (el.scrollHeight - el.offsetHeight)
    scroll.set(percentage)
  }

  onMount(() => {
    const resizeFN = window.addEventListener('resize', resize, false)
    const scrollFN = main.addEventListener('scroll', updateScroll, false)
    resize()
    return () => {
      window.removeEventListener(resizeFN)
      main.removeEventListener(scrollFN)
    }
  })
</script>

<div bind:this={wrapper}>
  <Nav {segment} />
  <main bind:this={main}>
    <slot />
  </main>
  <Loading />
</div>

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
