<script>
  import dj from 'dayjs'
  import ImageFrame from '../components/ImageFrame.svelte'
  import Icon from '../components/Icon.svelte'

  export let work
</script>

<a href={work.link} target="_blank" rel="noopener">
  <div class="horizontal">
    <div class="title regular">{work.title}</div>
    <div>
      <Icon icon="link-outline" />
      <span>{work.link.replace(/https?:\/\//, '')}</span>
    </div>
  </div>

  <ImageFrame
    src={work.image.sizes.medium_large}
    alt={work.image.description}
  />
</a>
<div class="horizontal regular">
  <div>{work.role}</div>
  <div>{dj(work.date * 1000).format('MMM YY')}</div>
</div>
<p>
  {@html work.content}
</p>

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
