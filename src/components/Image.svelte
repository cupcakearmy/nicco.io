<script context="module">
  const defaultOptions = {
    fetchFormat: 'auto',
    quality: 'auto:good',
  }
</script>

<script>
  import { Cloudinary } from 'cloudinary-core'
  import { onMount } from 'svelte'

  export let src = ''
  export let options = {}
  export let alt = ''
  export let crop = false

  let img
  let attrs = {}

  onMount(() => {
    if (crop) {
      let { width, height } = window.getComputedStyle(img)
      width = (parseInt(width) * window.devicePixelRatio) | 0
      height = (parseInt(height) * window.devicePixelRatio) | 0
      options = { ...options, width, gravity: 'auto', crop: 'fill' }
    }
    const cl = Cloudinary.new({ cloud_name: 'cupcakearmy' })
    const cleaned = src.replace('https://api.nicco.io', '/nicco')
    const all = { ...defaultOptions, ...options }
    console.log(all)
    attrs = cl.imageTag(cleaned, all).attributes()
    console.log(attrs)
  })
</script>

<img bind:this={img} {...$$restProps} {alt} {...attrs} />
