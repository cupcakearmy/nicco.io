<script>
  import 'highlight.js/styles/github.css'
  import hljs from 'highlight.js/lib/core'
  import javascript from 'highlight.js/lib/languages/javascript'
  import python from 'highlight.js/lib/languages/python'
  import yaml from 'highlight.js/lib/languages/yaml'
  import json from 'highlight.js/lib/languages/json'
  import bash from 'highlight.js/lib/languages/bash'
  import docker from 'highlight.js/lib/languages/dockerfile'
  import rust from 'highlight.js/lib/languages/rust'
  import css from 'highlight.js/lib/languages/css'
  import typescript from 'highlight.js/lib/languages/typescript'

  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('python', python)
  hljs.registerLanguage('yaml', yaml)
  hljs.registerLanguage('json', json)
  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('docker', docker)
  hljs.registerLanguage('rust', rust)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('typescript', typescript)

  import { onMount } from 'svelte'

  export let content

  onMount(() => {
    console.log('Highlight')
    hljs.initHighlighting()
  })
</script>

<style>
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
    background: #0000000d;
    overflow: auto;
  }

  div :global(code) {
    background: #00000012;
    padding: 0.25em;
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
</style>

<div>
  {@html content}
</div>
