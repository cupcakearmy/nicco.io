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
</style>

<div class="horizontal">
  <div class="title regular">{work.title}</div>
  <div>
    <ion-icon name="link-outline" />
    <a href={work.link} target="_blank">{work.link.replace(/https?:\/\//, '')}</a>
  </div>
</div>

<ImageFrame src={work.image.sizes.medium_large} alt={work.image.description} />
<div class="horizontal regular">
  <div>{work.role}</div>
  <div>{work.date}</div>
</div>
<p>
  {@html work.content}
</p>
