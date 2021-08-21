<script lang="ts">
  import IconList from '$lib/components/IconList.svelte'
  import SimplePage from '$lib/components/SimplePage.svelte'

  const links = [
    {
      href: 'https://www.buymeacoffee.com/cupcakearmy',
      name: 'Buy Me A Coffee',
      icon: 'cafe-outline',
    },
    {
      href: 'https://github.com/sponsors/cupcakearmy',
      name: 'Github Sponsor',
      icon: 'logo-github',
    },
  ]
</script>

<svelte:head>
  <title>Support</title>
</svelte:head>

<SimplePage title="Support">
  <IconList {links} />
</SimplePage>
