<script lang="ts">
  import type { Work } from '$lib/api'
  import dayjs from 'dayjs'
  import ImageFrame from '$lib/components/ImageFrame.svelte'
  import Icon from '$lib/components/Icon.svelte'

  export let work: Work
</script>

<section>
  <a href={work.work.link} target="_blank" rel="noopener">
    <div class="horizontal">
      <div class="title regular">{work.title}</div>
      <div>
        <Icon icon="link-outline" />
        <span>{work.work.link.replace(/https?:\/\//, '')}</span>
      </div>
    </div>

    <!-- <ImageFrame src={work.work.image.sizes.medium_large} alt={work.image.description} /> -->
    <!-- <ImageFrame srcset={work.work.image.srcSet} alt={work.work.image.altText} /> -->
    <ImageFrame src={work.work.image.sourceUrl} alt={work.work.image.altText} />
  </a>
  <div class="horizontal regular">
    <div>{work.work.role}</div>
    <div>{dayjs(work.work.date, 'X').format('MMM YY')}</div>
  </div>
  {#if work.content}
    <p>
      {@html work.content}
    </p>
  {/if}
</section>

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

  section {
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
