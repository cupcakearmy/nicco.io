import axios from 'axios'
import dj from 'dayjs'

const isDev = process.env.NODE_ENV !== 'production' && false
axios.defaults.baseURL = `${isDev ? 'http://localhost' : 'https://api.nicco.io'}/wp-json/wp/v2`

function normalize(post) {
  return {
    ...post,
    ...post.acf,
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
  }
}

function combineUrlAndParams(url, params) {
  const p = new URLSearchParams({
    per_page: 100,
    ...params,
  }).toString()
  return `${url}?${p}`
}

export async function getOne(url, params = {}) {
  const { data } = await axios(combineUrlAndParams(url, params))
  if (!data.length) return null
  else return normalize(data[0])
}

export async function getAll(url, params = {}) {
  const { data, headers } = await axios(combineUrlAndParams(url, params))
  const totalPages = parseInt(headers['x-wp-totalpages'])
  const results = [...data]
  if (totalPages > 1) {
    for (let page = 2; page <= totalPages; page++) {
      const { data } = await axios(combineUrlAndParams(url, { ...params, page }))
      results.push(...data)
    }
  }
  return results.map(normalize)
}

export function sortByAndMapDate(data, format = 'MMM YY') {
  return data
    .sort((a, b) => parseInt(b.date) - parseInt(a.date))
    .map((work) => ({
      ...work,
      date: dj(work.date * 1000).format(format),
    }))
}
