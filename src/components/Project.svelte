<script>
  export let project
</script>

<style>
  h2 {
    font-size: 2em;
    margin-bottom: 0.75em;
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
    margin-bottom: 4em;
  }

  ion-icon {
    transform: translateY(0.25em);
  }

  @media (max-width: 30em) {
    div {
      flex-direction: column;
    }
  }
</style>

<section>
  <h2>{project.name}</h2>

  <div>
    <b>{project.title}</b>
    <b class="date">{project.date}</b>
  </div>

  <p>{project.body}</p>

  <ion-icon name="link-outline" />
  <a href={project.link}>{project.link.replace(/https?:\/\//, '')}</a>

</section>
