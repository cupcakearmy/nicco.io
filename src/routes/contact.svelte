<script>
  import SimplePage from '../components/SimplePage.svelte'
</script>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    margin-right: 2em;
  }

  ion-icon {
    transform: translateY(0.3em);
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<SimplePage title="Contact">
  <p>
    <span>
      <a rel="noopener noreferrer" href="mailto:hi@nicco.io">
        <ion-icon name="chatbubble-outline" size="large" />
        Say hi@nicco.io
      </a>
    </span>

    <span>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/cupcakearmy/">
        <ion-icon name="logo-github" size="large" />
        Github
      </a>
    </span>

    <span>
      <a href="/privacy">
        <ion-icon name="finger-print-outline" size="large" />
        Privacy
      </a>
    </span>

  </p>
</SimplePage>
