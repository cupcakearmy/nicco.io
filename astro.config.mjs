// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './readingTime'

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), svelte()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})