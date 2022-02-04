<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/stores'

  import '../app.css'
  import '$lib/actions/cloudinary'

  import dayjs from 'dayjs'
  import customParseFormat from 'dayjs/plugin/customParseFormat.js'
  dayjs.extend(customParseFormat)

  import { scroll } from '$lib/stores'
  import Nav from '$lib/components/Nav.svelte'
  import Progress from '$lib/components/Progress.svelte'

  let wrapper: HTMLDivElement
  let main: HTMLElement

  function resize() {
    wrapper.style.height = `${window.innerHeight}px`
  }

  let last = ''
  $: {
    const { host, pathname } = $page.url
    const full = host + pathname
    if (last !== full) {
      last = full
      if (main) setTimeout(() => (main.scrollTop = 0), 150)
    }
  }

  function updateScroll(e: any) {
    const el = e.target
    const percentage = el.scrollTop / (el.scrollHeight - el.offsetHeight)
    scroll.set(isNaN(percentage) ? 0 : percentage)
  }

  onMount(() => {
    window.addEventListener('resize', resize, false)
    main.addEventListener('scroll', updateScroll, false)
    resize()
    return () => {
      window.removeEventListener('resize', resize)
      main.removeEventListener('scroll', updateScroll)
    }
  })
</script>

<div bind:this={wrapper}>
  <Nav />
  <main bind:this={main}>
    <slot />
  </main>
  {#if $page.url.pathname !== '/'}
    <Progress />
  {/if}
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
  }

  @media (max-width: 30em) {
    main {
      padding: 1em;
    }
  }
</style>
