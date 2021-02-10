<script>
  import { spring } from 'svelte/motion'

  import { scroll } from '../lib/scroll'

  let el
  const springed = spring(
    { scroll: 0 },
    {
      stiffness: 0.05,
      damping: 0.7,
    }
  )

  function updateState(value) {
    const max = 359.99999
    const R = 50
    let alpha = (360 / 1) * value
    alpha = Math.min(alpha, max)
    const a = ((90 - alpha) * Math.PI) / 180
    const x = R + R * Math.cos(a) * 2
    const y = R - R * Math.sin(a) * 2
    const center = alpha > 180 ? 1 : 0
    const path = `M${R},${-50} A${R * 2},${
      R * 2
    },0,${center},1,${x},${y} L${R},${R} L${R},${-R}`
    if (el) el.setAttribute('d', path)
  }

  $: springed.set({ scroll: $scroll })

  $: updateState($springed.scroll)
</script>

<div>
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <path bind:this={el} fill="var(--clr-secondary)" d="" />
  </svg>
  <span>{$scroll.toFixed(2)}</span>
</div>

<style>
  div {
    position: fixed;
    bottom: 1em;
    right: 1em;
    pointer-events: none;
    text-align: center;
  }

  span {
    display: block;
    font-size: 0.5em;
    background-color: var(--clr-primary);
    height: 1.5em;
  }
  svg {
    border: 0.125em solid var(--clr-primary);
    width: 2em;
    height: 2em;
    position: relative;
    top: 0.45em;
  }
</style>
