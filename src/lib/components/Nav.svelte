<script lang="ts">
  import { page } from '$app/stores'

  import Icon from './Icon.svelte'

  const routes = [
    { name: 'About', href: '/about' },
    // { name: 'Works', href: '/works' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]
</script>

<nav>
  <a href="/">
    <h1 class:active={$page.url.pathname === '/'}>NB</h1>
  </a>
  <ul>
    <li>
      <a href="/search">
        <Icon icon="search-outline" />
      </a>
    </li>
    {#each routes as { name, href }}
      <li>
        <a {href}>
          <span>{name}</span>
          <div class:active={$page.url.pathname.startsWith(href)} />
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav :global(*) {
    box-sizing: initial;
  }

  nav {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    width: 3em;
    height: 100%;
    background-color: var(--clr-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-right: 0.1em solid var(--clr-secondary);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 100%;
    overflow: auto;
  }

  a {
    writing-mode: vertical-rl;
    padding: 1em;
    text-decoration: none;
  }

  li a {
    line-height: 1em;
    width: 1em;
    position: relative;
  }

  li a span {
    z-index: 5;
    position: relative;
  }

  li a div {
    z-index: 4;
    width: 0.125em;
    height: 100%;
    top: 0;
    left: 1.12em;
    position: absolute;
    transition: all 500ms ease;
  }
  li a div.active {
    background-color: var(--clr-secondary);
  }
  li:hover a div:not(.active) {
    background-color: var(--clr-light);
  }

  h1 {
    margin: 0;
    writing-mode: horizontal-tb;
    letter-spacing: -0.15em;
    width: 1.15em;
    font-size: 1.5em;
  }

  h1.active {
    box-shadow: 0 0.1em var(--clr-secondary);
  }

  @media (max-width: 30em) {
    nav {
      width: 2.5em;
    }

    a {
      padding: 0.5em;
    }

    li a div {
      transform: translateX(-0.5em);
    }
  }
</style>
