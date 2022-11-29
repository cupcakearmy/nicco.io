<script lang="ts">
  import type { Link } from '$lib/components/IconList.svelte'
  import IconList from '$lib/components/IconList.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'

  const links: Link[] = [
    {
      href: 'mailto:hi@nicco.io',
      name: 'Say hi@nicco.io',
      icon: 'mail-outline',
    },
    {
      href: 'https://discord.gg/wS7RpYTYd2',
      name: 'Chat on Discord',
      icon: 'chatbubbles-outline',
    },
    {
      href: 'https://github.com/cupcakearmy',
      name: 'Github',
      icon: 'logo-github',
    },
    { href: 'https://spectare.nicco.io/share/q80YU8C2/nicco.io', name: 'Website Statistics', icon: 'analytics' },
    { href: '/privacy', name: 'Privacy Policy', icon: 'finger-print-outline' },
    { href: '/support', name: 'Support', icon: 'heart-sharp' },
    { href: 'https://status.nicco.io', name: 'Status Monitor', icon: 'caret-up-circle' },
  ]
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<SimplePage title="Contact">
  <IconList {links} />
</SimplePage>
