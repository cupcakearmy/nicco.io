<script>
  import SimplePage from '../components/SimplePage.svelte'

  const links = [
    { href: 'mailto:hi@nicco.io', name: 'Say hi@nicco.io', icon: 'chatbubble-outline' },
    { href: 'https://github.com/cupcakearmy', name: 'Github', icon: 'logo-github' },
    { href: '/privacy', name: 'Privacy Policy', icon: 'finger-print-outline' },
  ]
</script>

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

  ion-icon {
    transform: translateY(0.3em);
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<SimplePage title="Contact">
  <ul>
    {#each links as { href, name, icon }}
      <li>
        <a rel="noopener noreferrer" {href}>
          <ion-icon name={icon} size="large" />
          {name}
        </a>
      </li>
    {/each}
  </ul>
</SimplePage>
