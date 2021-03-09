<script>
  import Icon from './Icon.svelte'

  export let links = []
</script>

<ul>
  {#each links as { href, name, icon }}
    <li>
      <a rel="noopener noreferrer" {href} target="_blank">
        <Icon class="icon" {icon} />
        {name}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    transition: transform 200ms ease;
    padding: 0.75em 0.5em;
    cursor: pointer;
    border-radius: 0.5em;
  }

  li:hover {
    box-shadow: 0px 6px 6px -3px #00000012;
    transform: translateY(0.25em) translateX(0.15em) scale(1.05);
  }

  li :global(.icon) {
    transform: translateY(0.3em);
    font-size: 2em;
    margin-right: 0.5rem;
  }
</style>
