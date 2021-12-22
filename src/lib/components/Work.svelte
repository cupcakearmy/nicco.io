<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'
  import ImageFrame from '$lib/components/ImageFrame.svelte'
  import type { GQLBaseWorkFragment } from '$lib/gql/gen'
  import dayjs from 'dayjs'

  export let work: GQLBaseWorkFragment
</script>

<section>
  <a href="/works/{work.slug}">
    <div class="horizontal">
      <div class="title regular">{work.title}</div>
      <div>
        <a href={work.work.link} target="_blank" rel="noopener">
          <Icon icon="link-outline" />
          <span>{work.work.link.replace(/https?:\/\//, '')}</span>
        </a>
      </div>
    </div>

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
