import { SDK } from '$lib/gql'
import type { GQLBasePageFragment } from '$lib/gql/gen'
import lunr from 'lunr'

function removeHTML(s: string) {
  return s.replace(/<.*?>|\s+|&#\d+;/g, ' ').trim()
}

function convertForIdx(type: string, items: GQLBasePageFragment[]) {
  const keys: (keyof GQLBasePageFragment)[] = ['title', 'content', 'slug']
  return items.map((item) => ({
    url: `${type}/${item.slug}`,
    data: keys.map((field) => removeHTML(item[field] ?? '')).join(' '),
  }))
}

export const get = async () => {
  const { __typename, ...all } = await SDK.Search()
  const converted = Object.entries(all)
    .map(([type, data]) => convertForIdx(type, data.nodes))
    .flat()

  const idx = lunr(function () {
    this.ref('url')
    this.field('data')
    converted.forEach((doc) => this.add(doc))
  })

  return { body: idx }
}
