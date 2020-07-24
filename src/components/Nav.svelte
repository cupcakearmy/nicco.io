<script>
  export let segment

  const routes = [
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/works' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: 'https://blog.nicco.io' },
    { name: 'Contact', href: '/contact' },
  ]
</script>

<style>
  nav {
    height: 100vh;
    background-color: var(--clr-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    writing-mode: vertical-rl;
    padding: 1em;
    text-decoration: none;
  }

  li a {
    line-height: 1em;
    width: 1em;
  }

  h1 {
    margin: 0;
    writing-mode: horizontal-tb;
    letter-spacing: -0.15em;
    width: 1.15em;
    font-size: 1.5em;
  }

  @media (max-width: 30em) {
    a {
      padding: 0.5em;
    }
  }
</style>

<nav>
  <a href="/">
    <h1>NB</h1>
  </a>
  <ul>
    {#each routes as { name, href }}
      <li>
        <a {href}>{name}</a>
      </li>
    {/each}
  </ul>
</nav>
