import axios from 'axios'

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
})

export function gql(s: TemplateStringsArray) {
  return s.join('')
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
  return data.data as T
}

export type Page = {
  title: string
  content: string | null
  slug: string
  id: string
  status: string
}

export interface Work extends Page {
  work: {
    date: string
    image: MediaItem
    link: string
    role: string
  }
}

export interface Project extends Page {
  project: {
    date: string
    link: string
    description: string
  }
}

export type MediaItem = {
  srcSet: string
  altText: string
  sourceUrl: string
}
