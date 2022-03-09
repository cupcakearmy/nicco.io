import { SDK } from '$lib/gql'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<{ type: string; slug: string }, any> = async (args) => {
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

    case 'tags': {
      if (all) {
        const data = await SDK.TagsMany()
        const sorted = [...data.tags.nodes].filter((t) => t.count).sort((a, b) => b.count - a.count)
        return { body: sorted }
      }
    }

    case 'postsByTags': {
      const data = await SDK.PostsManyByTag({ tag: slug })
      return { body: data.posts.nodes }
    }

    default:
      return { status: 404 }
  }
}
