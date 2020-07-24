<script>
  import SimplePage from '../components/SimplePage.svelte'
</script>

<style>
  img {
    position: absolute;
    z-index: -1;
    object-fit: contain;
    width: 24vw;
    height: 30vw;
    left: 35em;
    top: 12em;
  }

  @media (max-width: 55em) {
    img {
      position: initial;
      width: 100%;
      height: 100%;
      object-position: right;
      max-height: 20em;
      margin-top: 4em;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<SimplePage title="About">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <img src="/images/about.jpg" alt="decoration" />
</SimplePage>
