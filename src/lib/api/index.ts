import axios from 'axios'

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
})

export function gql(strings: TemplateStringsArray, ...args: string[]) {
  let joined = ''
  for (const part of strings) {
    const arg = args.shift() ?? ''
    joined += part + arg
  }
  return joined
}

export async function Call<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
  const { data } = await API({
    url: '/graphql',
    method: 'post',
    data: {
      query,
      variables,
    },
  })
  if (data.errors?.length > 0) {
    throw new Error(data.errors[0].message)
  }
  return data.data as T
}

export type Page = {
  title: string
  content: string | null
  slug: string
  id: string
  status: string
}

export const BaseAttributes = `
    id
    slug
    status
    title
    content
`

export interface Post extends Page {
  date: string
  modified: string
  post: {
    featured: MediaItem
  }
}

export const PostFragment = gql`
  fragment PostFragment on Post {
    ${BaseAttributes}
    date
    modified
    post {
      featured {
        ...MediaItemFragment
      }
    }
  }
`

export interface Work extends Page {
  work: {
    date: string
    image: MediaItem
    link: string
    role: string
  }
}

export const WorkFragment = gql`
  fragment WorkFragment on Work {
      ${BaseAttributes}
    work {
      date
      image {
        ...MediaItemFragment
      }
      link
      role
    }
  }
`

export interface Project extends Page {
  project: {
    date: string
    link: string
    description: string
  }
}

export const ProjectFragment = gql`
  fragment ProjectFragment on Project {
    ${BaseAttributes}
    project {
      date
      link
      description
    }
  }
`

export type MediaItem = {
  srcSet: string
  altText: string
  sourceUrl: string
}

export const MediaItemFragment = gql`
  fragment MediaItemFragment on MediaItem {
    srcSet
    altText
    sourceUrl
  }
`
