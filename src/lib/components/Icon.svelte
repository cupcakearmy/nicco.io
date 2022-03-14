<script lang="ts" context="module">
  import IconAnalytics from '$lib/icons/IconAnalytics.svelte'
  import IconCafe from '$lib/icons/IconCafe.svelte'
  import IconCaretUpCircle from '$lib/icons/IconCaretUpCircle.svelte'
  import IconChatbubblesOutline from '$lib/icons/IconChatbubblesOutline.svelte'
  import IconFingerPrintOutline from '$lib/icons/IconFingerPrintOutline.svelte'
  import IconHeartSharp from '$lib/icons/IconHeartSharp.svelte'
  import IconLinkOutline from '$lib/icons/IconLinkOutline.svelte'
  import IconLogoGithub from '$lib/icons/IconLogoGithub.svelte'
  import IconMailOutline from '$lib/icons/IconMailOutline.svelte'
  import IconPaypal from '$lib/icons/IconPaypal.svelte'
  import IconSearchOutline from '$lib/icons/IconSearchOutline.svelte'

  export type IconType =
    | 'search-outline'
    | 'link-outline'
    | 'cafe'
    | 'logo-github'
    | 'mail-outline'
    | 'chatbubbles-outline'
    | 'logo-github'
    | 'analytics'
    | 'finger-print-outline'
    | 'heart-sharp'
    | 'caret-up-circle'
    | 'paypal'

  const mapping: Record<IconType, any> = {
    'search-outline': IconSearchOutline,
    'link-outline': IconLinkOutline,
    cafe: IconCafe,
    'logo-github': IconLogoGithub,
    'mail-outline': IconMailOutline,
    'chatbubbles-outline': IconChatbubblesOutline,
    analytics: IconAnalytics,
    'finger-print-outline': IconFingerPrintOutline,
    'heart-sharp': IconHeartSharp,
    'caret-up-circle': IconCaretUpCircle,
    paypal: IconPaypal,
  }
</script>

<script lang="ts">
  export let icon: IconType

  $: component = mapping[icon]
</script>

{#if component}
  <span {...$$restProps}>
    <svelte:component this={component} />
  </span>
{/if}

<style>
  span {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box;
    transform: translateY(0.2em);
  }
  span > :global(svg) {
    display: block;
  }
</style>
