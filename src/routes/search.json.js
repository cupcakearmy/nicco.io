import lunr from 'lunr'

import { getAll } from '../lib/wp'

function removeHTML(s) {
  return s.replace(/<.*?>|\s+|&#\d+;/g, ' ').trim()
}

async function convertForIdx(type, fields = []) {
  const items = await getAll(type)
  const defaults = ['title', 'content', 'slug']
  return items.map((item) => ({
    url: `${item.type}/${item.slug}`,
    data: [...defaults, ...fields].map((field) => removeHTML(item[field])).join(' '),
  }))
}

export async function get(req, res) {
  const all = await Promise.all([
    convertForIdx('projects', ['description']),
    convertForIdx('pages'),
    convertForIdx('posts'),
    convertForIdx('works', ['role']),
  ])

  const idx = lunr(function () {
    this.ref('url')
    this.field('data')

    all.flat().forEach((doc) => this.add(doc))
  })
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(idx))
}
