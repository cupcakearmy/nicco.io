<script>
  import IconList from '../components/IconList.svelte'

  import SimplePage from '../components/SimplePage.svelte'

  const links = [
    {
      href: 'mailto:hi@nicco.io',
      name: 'Say hi@nicco.io',
      icon: 'chatbubbles-outline',
    },
    {
      href: 'https://github.com/cupcakearmy',
      name: 'Github',
      icon: 'logo-github',
    },
    { href: '/privacy', name: 'Privacy Policy', icon: 'finger-print-outline' },
  ]
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<SimplePage title="Contact">
  <IconList {links} />
</SimplePage>
