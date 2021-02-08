<script>
  import { spring } from 'svelte/motion'

  import { scroll } from '../lib/scroll'

  let el
  const springed = spring(
    { scroll: 0 },
    {
      stiffness: 0.02,
      damping: 0.75,
    }
  )

  function updateState(value) {
    const R = 50
    let alpha = (360 / 1) * value
    if (alpha === 360) alpha = 359.99999
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

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path bind:this={el} fill="var(--clr-secondary)" d="" />
</svg>

<style>
  svg {
    position: fixed;
    bottom: 1em;
    right: 1em;
    border: 0.125em solid var(--clr-primary);
    width: 2em;
    height: 2em;
    pointer-events: none;
  }
</style>
