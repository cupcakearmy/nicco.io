<script>
  export let result

  const [type, slug] = result.ref.split('/')
  let href = '/'

  $: {
    switch (type) {
      case 'works':
      case 'projects':
        href = `${type}`
        break
      case 'post':
        href = `/blog/${slug}`
        break
      case 'page':
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
    margin-top: 2em;
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
