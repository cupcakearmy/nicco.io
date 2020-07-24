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
    align-items: baseline;
  }

  section {
    margin-bottom: 4em;
  }

  ion-icon {
    transform: translateY(0.25em);
  }
</style>

<section>
  <div>
    <h2>{project.name}</h2>
  </div>

  <div>
    <b>{project.title}</b>
    <b>{project.date}</b>
  </div>

  <p>{project.body}</p>

  <ion-icon name="link-outline" />
  <a href={project.link}>{project.link.replace(/https?:\/\//, '')}</a>

</section>
