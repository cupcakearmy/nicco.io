<script lang="ts">
  import hljs from 'highlight.js/lib/core'
  import bash from 'highlight.js/lib/languages/bash'
  import css from 'highlight.js/lib/languages/css'
  import docker from 'highlight.js/lib/languages/dockerfile'
  import javascript from 'highlight.js/lib/languages/javascript'
  import json from 'highlight.js/lib/languages/json'
  import python from 'highlight.js/lib/languages/python'
  import rust from 'highlight.js/lib/languages/rust'
  import typescript from 'highlight.js/lib/languages/typescript'
  import yaml from 'highlight.js/lib/languages/yaml'
  import { onMount } from 'svelte'
  import ArticleOverview, { ArticleHeading } from './ArticleOverview.svelte'

  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('python', python)
  hljs.registerLanguage('yaml', yaml)
  hljs.registerLanguage('json', json)
  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('docker', docker)
  hljs.registerLanguage('rust', rust)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('typescript', typescript)

  export let content: string
  let headings: ArticleHeading[] | null = null

  function encodeTextToUrl(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^A-Za-z ]/g, '')
      .replace(/ +/g, '-')
  }

  async function update(isDark: boolean) {
    isDark ? await import('highlight.js/styles/github-dark.css') : await import('highlight.js/styles/github.css')
  }

  onMount(async () => {
    hljs.highlightAll()

    // Add anchor links to headers
    const selector = [1, 2, 3, 4, 5, 6].map((i) => `div.adapter h${i}`).join(', ')
    const elements = window.document.querySelectorAll(selector)
    headings = Array.from(elements).map((element) => {
      const text = element.textContent || ''
      const hash = encodeTextToUrl(text)
      const href = `${window.location.pathname}#${hash}`
      const level = parseInt(element.tagName.slice(1))

      element.innerHTML = `<a class="target-link" id="${hash}" href="${href}">${text}</a>`
      return { text, hash, level, href }
    })

    const match = window.matchMedia('(prefers-color-scheme: dark)')
    match.addEventListener('change', (e) => update(e.matches))
    update(match.matches)
  })
</script>

<div class="adapter">
  {#if headings}
    <ArticleOverview {headings} />
  {/if}
  {@html content}
</div>

<style>
  .adapter {
    position: relative;
  }
  div :global(.alignfull) {
    width: calc(100vw - 6em);
    margin-left: -2em;
  }
  div :global(.alignwide) {
    width: calc(100% + 4em);
    margin-left: -2em;
  }
  @media (max-width: 30em) {
    div :global(.alignfull) {
      width: calc(100vw - 4em);
      margin-left: -1em;
    }
    div :global(.alignwide) {
      width: calc(100% + 2em);
      margin-left: -1em;
    }
  }

  div :global(figure img) {
    width: 100%;
    height: 100%;
  }

  div :global(figure) {
    margin: 2em 0;
  }
  div :global(figure figcaption) {
    opacity: 0.75;
    font-style: italic;
  }

  div :global(a) {
    border-bottom: 0.125em solid var(--clr-primary);
  }

  div :global(pre) {
    padding: 1em;
    background: var(--clr-transparent-0);
    overflow: auto;
  }

  div :global(code) {
    background: var(--clr-transparent-0);
    padding: 0.25em;
    font-size: 0.8em;
  }
  div :global(pre code) {
    background: initial;
    padding: initial;
    -moz-tab-size: 2;
    tab-size: 2;
  }

  div :global(h1),
  div :global(h2),
  div :global(h3),
  div :global(h4),
  div :global(h5),
  div :global(h6) {
    margin: 0;
    margin-top: 3em;
    border-left: 0.2rem solid var(--clr-primary);
    padding-left: 0.5rem;
    margin-left: -0.7rem;
  }

  div :global(.target-link) {
    border-bottom: none;
  }

  div :global(p.has-background) {
    padding: 0.5em;
  }
</style>
