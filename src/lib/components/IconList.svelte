<script lang="ts">
  import Icon from './Icon.svelte'

  type Link = {
    href: string
    name: string
    icon: string
  }

  export let links: Link[] = []

  function isExternal(link: string) {
    return /^https?\:\/\//.test(link)
  }

  $: list = links.map((link) => ({
    ...link,
    external: isExternal(link.href),
  }))
</script>

<ul>
  {#each list as { href, name, icon, external }}
    <a rel={external ? 'noopener noreferrer' : ''} {href} target={external ? '_blank' : ''}>
      <li>
        <Icon class="icon" {icon} />
        {name}
      </li>
    </a>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    transition: transform 200ms ease;
    padding: 0.75em 0.5em;
    cursor: pointer;
    border-radius: 0.5em;
    display: block;
  }

  a:hover {
    box-shadow: 0px 6px 6px -3px #00000012;
    transform: translateY(0.25em) translateX(0.15em) scale(1.05);
  }

  a :global(.icon) {
    transform: translateY(0.3em);
    font-size: 2em;
    margin-right: 0.5rem;
  }
</style>
