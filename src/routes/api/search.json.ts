import lunr from 'lunr'
// import { BaseAttributes, Call, gql, Page } from '$lib/api'

// function removeHTML(s: string) {
//   return s.replace(/<.*?>|\s+|&#\d+;/g, ' ').trim()
// }

// function convertForIdx(type: string, items: Page[]) {
//   const keys: (keyof Page)[] = ['title', 'content', 'slug']
//   return items.map((item) => ({
//     url: `${type}/${item.slug}`,
//     data: keys.map((field) => removeHTML(item[field] ?? '')).join(' '),
//   }))
// }

// async function getAll() {
//   const all = await Call<Record<'posts' | 'projects' | 'works', { nodes: Page[] }>>(gql`
//     query {
//       posts(first: 1000) {
//         nodes {
//           ${BaseAttributes}
//         }
//       }
//       projects(first: 1000) {
//         nodes {
//           ${BaseAttributes}
//         }
//       }
//       works(first: 1000) {
//         nodes {
//           ${BaseAttributes}
//         }
//       }
//     }
//   `)
//   return all
// }

export const get = async () => {
  // const all = await getAll()
  // const converted = Object.entries(all)
  //   .map(([type, data]) => convertForIdx(type, data.nodes))
  //   .flat()

  const idx = lunr(function () {
    this.ref('url')
    this.field('data')
    // converted.forEach((doc) => this.add(doc))
  })

  return { body: idx }
}
