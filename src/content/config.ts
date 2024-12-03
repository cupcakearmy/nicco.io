import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // Transform string to Date object
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      coverImage: image().optional(),
      tags: z.string().array().default([]),
    }),
})

const page = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { blog, page }
