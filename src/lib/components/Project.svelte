<script lang="ts">
  import type { GQLBaseProjectFragment } from '$lib/gql/gen'
  import dayjs from 'dayjs'
  import Icon from './Icon.svelte'

  export let project: GQLBaseProjectFragment
</script>

<section>
  <a href={project.project.link} target="_blank" rel="noopener">
    <h2>{project.title}</h2>
  </a>
  <div class="subtitle">
    <b>{project.project.description}</b>
    <b class="date">{dayjs(project.project.date, 'X').format('MMM YY')}</b>
  </div>

  <p>
    {@html project.content}
  </p>

  <div class="link">
    <Icon icon="link-outline" />
    <a rel="noopener noreferrer" target="_blank" href={project.project.link}
      >{project.project.link.replace(/https?:\/\//, '')}</a
    >
  </div>
</section>

<style>
  h2 {
    font-size: 2em;
    margin-bottom: 0.25em;
  }

  div.subtitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .date {
    align-self: flex-end;
  }

  .link {
    display: flex;
    overflow: auto;
  }

  .link a {
    margin-left: 0.5rem;
    display: block;
  }

  section {
    margin-bottom: 6em;
  }

  a {
    font-family: monospace;
  }

  @media (max-width: 30em) {
    div.subtitle {
      flex-direction: column;
    }
  }
</style>
