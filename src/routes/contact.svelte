<script lang="ts">
  import IconList from '$lib/components/IconList.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'

  const links = [
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
    { href: '/privacy', name: 'Privacy Policy', icon: 'finger-print-outline' },
    { href: '/support', name: 'Support', icon: 'heart-sharp' },
  ]
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<SimplePage title="Contact">
  <IconList {links} />
</SimplePage>
