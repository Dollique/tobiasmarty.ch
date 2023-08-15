import { readdirSync } from 'fs';
const styleFiles = (path) => {
  const files = readdirSync(path);
  return files.map(i => path + i);
}

export default defineNuxtConfig({
  devtools: { enabled: true },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  css: styleFiles('./assets/scss/globals/'),

  // TODO: REPLACE FOR NUXT 3 COMPATIBILITY
  styleResources: {
    scss: ['./assets/scss/variables/*.scss', './assets/scss/mixins.scss']
  },

  components: [
    { path: '~/components/content', prefix: 'SB_' },
    { path: '~/components/form', prefix: 'SB_' },
    { path: '~/components/site' },
    { path: '~/components/templates' },
  ],

  gsap: {},
  modules: [
    '@nuxtjs/eslint-module',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.TOBIASMARTY_STORYBLOK_TOKEN
      }
    ],
    '@hypernym/nuxt-gsap'
  ],
  build: {
    transpile: [
      '@marvr/storyblok-rich-text-vue-renderer'
    ],
    standalone: true, // fix swiperJS 8 -> https://github.com/seosmmbusiness/NuxtJs-SwiperJs8
  },

  pageTransition: {
    /* name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    } */
  }
})
