import { initialize, image } from 'svelte-cloudinary'

initialize({ cloud_name: 'cupcakearmy', secure: true })

export function cdn(el: HTMLImageElement, src: string) {
  const cleaned = src.replace('https://api.nicco.io', '/nicco')
  return image(el, { src: cleaned, bind: { width: true }, lazy: true })
}
