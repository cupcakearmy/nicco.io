<script>
  import ImageFrame from '../components/ImageFrame.svelte'

  export let work
</script>

<style>
  .title {
    font-size: 2em;
    line-height: 1;
  }

  .horizontal {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .regular {
    font-weight: 400;
  }

  p {
    margin-bottom: 6em;
  }

  a {
    font-family: monospace;
  }

  @media (max-width: 30em) {
    .horizontal {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

<a href={work.link} target="_blank" rel="noopener">
  <div class="horizontal">
    <div class="title regular">{work.title}</div>
    <div>
      <ion-icon name="link-outline" />
      <span>{work.link.replace(/https?:\/\//, '')}</span>
    </div>
  </div>

  <ImageFrame src={work.image.sizes.medium_large} alt={work.image.description} />
</a>
<div class="horizontal regular">
  <div>{work.role}</div>
  <div>{work.date}</div>
</div>
<p>
  {@html work.content}
</p>
