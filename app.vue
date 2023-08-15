<script setup lang="ts">
const title = ref('tobiasmarty.ch')
const description = ref('')

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/favicon_apple_touch.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' },
  ],
  script: [
    {
      async: true,
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js',
    },
    {
      async: true,
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js',
    },
  ],
})
</script>


<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
