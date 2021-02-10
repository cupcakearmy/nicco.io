<script>
  import dj from 'dayjs'

  export let project
</script>

<section>
  <a href={project.link} target="_blank" rel="noopener">
    <h2>{project.title}</h2>
  </a>
  <div>
    <b>{project.description}</b>
    <b class="date">{dj(project.date * 1000).format('MMM YY')}</b>
  </div>

  <p>
    {@html project.content}
  </p>

  <ion-icon name="link-outline" />
  <a class="link" rel="noopener noreferrer" target="_blank" href={project.link}
    >{project.link.replace(/https?:\/\//, '')}</a
  >
</section>

<style>
  h2 {
    font-size: 2em;
    margin-bottom: 0.25em;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .date {
    align-self: flex-end;
  }

  section {
    margin-bottom: 6em;
  }

  a {
    font-family: monospace;
  }

  a.link {
    display: block;
    overflow: auto;
  }

  @media (max-width: 30em) {
    div {
      flex-direction: column;
    }
  }
</style>
