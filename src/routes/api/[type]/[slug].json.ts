import { SDK } from '$lib/gql'
import type { ServerRequest } from '@sveltejs/kit/types/hooks'

export async function get(args: ServerRequest) {
  const { type, slug } = args.params
  const all = slug === '*'

  switch (type) {
    case 'pages': {
      if (all) {
        const data = await SDK.PagesMany()
        return { body: data.pages?.nodes }
      } else {
        const data = await SDK.PagesOne({ slug })
        return { body: data.page }
      }
    }
    case 'works': {
      if (all) {
        const data = await SDK.WorksMany()
        return { body: data.works?.nodes }
      } else {
        const data = await SDK.WorksOne({ slug })
        return { body: data.work }
      }
    }
    case 'projects': {
      if (all) {
        const data = await SDK.ProjectsMany()
        return { body: data.projects?.nodes }
      } else {
        const data = await SDK.ProjectsOne({ slug })
        return { body: data.project }
      }
    }

    case 'media': {
      if (all) {
        const data = await SDK.MediaItemsMany()
        return { body: data.mediaItems?.nodes }
      } else {
        const data = await SDK.MediaItemsOne({ slug })
        return { body: data.mediaItem }
      }
    }

    case 'posts': {
      if (all) {
        const data = await SDK.PostsMany()
        return { body: data.posts?.nodes }
      } else {
        const data = await SDK.PostsOne({ slug })
        return { body: data.post }
      }
    }

    default:
      return { status: 404 }
  }
}
