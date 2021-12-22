import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import analyze from 'rollup-plugin-analyzer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    target: '#svelte',

    vite: {
      build: {
        rollupOptions: {
          plugins: [analyze()],
        },
      },
    },
  },
}

export default config
