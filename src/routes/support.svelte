<script lang="ts">
  import type { Link } from '$lib/components/IconList.svelte'
  import IconList from '$lib/components/IconList.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'

  const links: Link[] = [
    {
      href: 'https://www.buymeacoffee.com/cupcakearmy',
      name: 'Buy Me A Coffee',
      icon: 'cafe',
    },
    {
      href: 'https://github.com/sponsors/cupcakearmy',
      name: 'Github Sponsor',
      icon: 'logo-github',
    },
    { href: 'https://www.paypal.com/paypalme/cupcakearmy', name: 'Paypal', icon: 'paypal' },
  ]
</script>

<svelte:head>
  <title>Support</title>
</svelte:head>

<SimplePage title="Support">
  <IconList {links} />
</SimplePage>
