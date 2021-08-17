import type { RequestHandler } from '@sveltejs/kit'

import {
  BaseAttributes,
  Call,
  gql,
  MediaItem,
  MediaItemFragment,
  Page,
  Project,
  ProjectFragment,
  WorkFragment,
} from '$lib/api'

export const get: RequestHandler = async (args) => {
  const { type, slug } = args.params
  const allChar = '*'
  const all = slug === allChar

  switch (type) {
    case 'pages': {
      if (all) {
        const data = await Call<{ pages: { nodes: Page[] } }>(gql`
          query {
            pages {
              nodes {
                ${BaseAttributes}
              }
            }
          }
        `)
        return { body: data.pages.nodes }
      } else {
        const data = await Call<{ page: Page }>(
          gql`
            query ($slug: ID!) {
              page(id: $slug, idType: URI) {
                ${BaseAttributes}
              }
            }
          `,
          { slug: '/' + slug }
        )
        return { body: data.page }
      }
    }
    case 'works': {
      if (all) {
        const query = gql`
          ${MediaItemFragment}
          ${WorkFragment}
          query {
            works {
              nodes {
                ...WorkFragment
              }
            }
          }
        `
        const data = await Call<{ works: { nodes: MediaItem[] } }>(query)
        return { body: data.works.nodes }
      } else {
        const data = await Call<{ work: MediaItem }>(
          gql`
            ${MediaItemFragment}
            ${WorkFragment}
            query ($slug: ID!) {
              work(id: $slug, idType: SLUG) {
                ...WorkFragment
              }
            }
          `,
          { slug }
        )
        return { body: data.work }
      }
    }
    case 'projects': {
      if (all) {
        const data = await Call<{ projects: { nodes: Project[] } }>(
          gql`
            ${ProjectFragment}
            query {
              projects {
                nodes {
                  ...ProjectFragment
                }
              }
            }
          `
        )
        return { body: data.projects.nodes }
      } else {
        const data = await Call<{ project: Project }>(
          gql`
            ${ProjectFragment}
            query ($slug: ID!) {
              project(id: $slug, idType: SLUG) {
                ...ProjectFragment
              }
            }
          `,
          { slug }
        )
        return { body: data.project }
      }
    }

    case 'media': {
      const data = await Call<{ mediaItem: MediaItem }>(
        gql`
          ${MediaItemFragment}
          query ($slug: ID!) {
            mediaItem(id: $slug, idType: SLUG) {
              ...MediaItemFragment
            }
          }
        `,
        { slug }
      )
      return { body: data.mediaItem }
    }
    default:
      return { status: 404 }
  }
}
