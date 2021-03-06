<script>
  export let icon
</script>

<img {...$$restProps} src="/icons/{icon}.svg" alt={icon} />

<style>
  img {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    fill: currentcolor;
    box-sizing: content-box;
    transform: translateY(0.2em);
  }
</style>
