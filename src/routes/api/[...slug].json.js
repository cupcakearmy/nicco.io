import { respond, getAll, getOne, sortByDate } from '../../lib/wp'

export async function get(req, res) {
  const [type, slug] = req.params.slug

  if (slug) {
    const data = await getOne(type, { slug })
    respond(res, { data })
  } else {
    const data = await getAll(type)
    respond(res, { data: sortByDate(data) })
  }
}
