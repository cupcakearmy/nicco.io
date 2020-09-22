<script>
  export let work
</script>

<style>
  img {
    width: 100%;
  }

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
  <div><a href={work.link} target="_blank">{work.link.replace(/https?:\/\//, '')}</a></div>
</div>
<img src={work.image.url} alt={work.image.description} />
<div class="horizontal regular">
  <div>{work.role}</div>
  <div>{work.date}</div>
</div>
<p>
  {@html work.content}
</p>
