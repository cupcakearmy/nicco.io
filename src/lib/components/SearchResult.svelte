<script lang="ts" context="module">
  export type SearchResultItem = {
    ref: string
    score: number
  }
</script>

<script lang="ts">
  export let result: SearchResultItem

  const [type, slug] = result.ref.split('/')
  let href = '/'

  $: {
    switch (type) {
      case 'works':
        href = `${type}/${slug}`
        break
      case 'projects':
        href = `${type}`
        break
      case 'posts':
        href = `/blog/${slug}`
        break
      case 'pages':
        href = `/${slug}`
        break
    }
  }
</script>

<li>
  <a {href}>
    <h3>{slug.replace(/-/g, ' ')}</h3>
    <span>{type}</span>
    <code>Score: {result.score.toFixed(1)}</code>
  </a>
</li>

<style>
  h3 {
    margin: 0;
    margin-top: 2.5em;
    margin-bottom: 0.2em;
    text-transform: capitalize;
  }
  span {
    display: inline-block;
    padding: 0.1em 0.15em;
    background-color: var(--clr-primary);
    margin: 0;
    line-height: 90%;
    height: 1.25em;
  }

  code {
    margin-left: 1em;
  }
</style>
