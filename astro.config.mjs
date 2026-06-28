// @ts-check
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import { remarkReadingTime } from "./readingTime";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), svelte()],
  markdown: {
    processor: unified({
      rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "wrap" }]],
      remarkPlugins: [remarkReadingTime],
    }),
  },
  vite: {
    plugins: [Icons({ compiler: "astro" })],
  },
});
