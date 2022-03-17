<script lang="ts" context="module">
  export type ArticleHeading = {
    text: string
    hash: string
    href: string
    level: number
  }
</script>

<script lang="ts">
  export let headings: ArticleHeading[]
</script>

<div class="wrapper">
  <b>Outline</b>
  {#each headings as { text, level, href }}
    <div style="margin-left: {level - 2}rem;">
      <span>▶</span>
      <a {href}>
        {text}
      </a>
    </div>
  {/each}
</div>

<style>
  .wrapper {
    margin: 2rem 0;
  }

  @media (min-width: 75rem) {
    .wrapper {
      margin: 0;
      position: absolute;
      top: 0;
      left: 40rem;
      width: calc(100vw - 51rem);
    }
  }

  span {
    font-size: 0.5em;
    transform: translateY(-0.8em);
    display: inline-block;
  }

  a {
    height: 1.4em;
    display: inline-block;
    max-width: calc(100% - 1.5rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
