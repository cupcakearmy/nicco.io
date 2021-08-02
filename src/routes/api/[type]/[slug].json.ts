import type { RequestHandler } from '@sveltejs/kit'

import { Call, gql, MediaItem, Page, Project } from '$lib/api'

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
                title
                content
                slug
                status
                id
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
                title
                content
                slug
                status
                id
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
        const data = await Call<{ works: { nodes: MediaItem[] } }>(gql`
          query {
            works {
              nodes {
                id
                title
                content
                slug
                status
                work {
                  date
                  image {
                    sourceUrl
                    srcSet
                    altText
                  }
                  link
                  role
                }
              }
            }
          }
        `)
        return { body: data.works.nodes }
      } else {
      }
    }
    case 'projects': {
      if (all) {
        const data = await Call<{ projects: { nodes: Project[] } }>(gql`
          query {
            projects {
              nodes {
                id
                title
                content
                slug
                status
                project {
                  date
                  description
                  link
                }
              }
            }
          }
        `)
        return { body: data.projects.nodes }
      }
    }

    case 'media': {
      const data = await Call<{ mediaItem: MediaItem }>(
        gql`
          query ($slug: ID!) {
            mediaItem(id: $slug, idType: SLUG) {
              srcSet
              altText
              sourceUrl
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
