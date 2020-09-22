import axios from 'axios'

const isDev = process.env.NODE_ENV !== 'production'
axios.defaults.baseURL = `${isDev ? 'http://localhost' : 'https://api.nicco.io'}/wp-json/wp/v2`

function normalize(post) {
  return {
    ...post.acf,
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
  }
}

export async function getOne(url, params = {}) {
  const p = new URLSearchParams(params).toString()
  const { data } = await axios(`${url}?${p}`)
  if (!data.length) return null
  else return normalize(data[0])
}

export async function getAll(url, params = {}) {
  const { data } = await axios(url)
  return data.map(normalize)
}
