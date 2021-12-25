<script lang="ts">
  export let name: string = ''
  export let href: string = ''
  export let count: number = 0
</script>

<a {href}>
  <div>
    {name} <i>{count}</i>
  </div>
</a>

<style>
  div {
    display: inline-block;
    margin: 0.25rem;
    padding: 0 0.5rem;
    background-color: var(--clr-primary);
    width: max-content;
  }

  i {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85em;
    font-weight: bold;
    color: var(--clr-secondary);
  }
</style>
