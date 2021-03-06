<script>
  import dj from 'dayjs'

  import Icon from '../components/Icon.svelte'

  export let project
</script>

<section>
  <a href={project.link} target="_blank" rel="noopener">
    <h2>{project.title}</h2>
  </a>
  <div class="subtitle">
    <b>{project.description}</b>
    <b class="date">{dj(project.date * 1000).format('MMM YY')}</b>
  </div>

  <p>
    {@html project.content}
  </p>

  <div class="link">
    <Icon icon="link-outline" />
    <a rel="noopener noreferrer" target="_blank" href={project.link}
      >{project.link.replace(/https?:\/\//, '')}</a
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
