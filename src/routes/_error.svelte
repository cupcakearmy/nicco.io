<script>
  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'
</script>

<style>
  h1 {
    font-size: 8vw;
  }

  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
