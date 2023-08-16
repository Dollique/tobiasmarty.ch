export default defineNuxtConfig({
  devtools: { enabled: true },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/includes/variables/colors.scss";
            @import "@/assets/scss/includes/variables/structure.scss";
            @import "@/assets/scss/includes/mixins/mixins.scss";
            @import "@/assets/scss/includes/globals/fonts.scss";
            @import "@/assets/scss/includes/globals/global.scss";
            @import "@/assets/scss/includes/globals/resets.scss";
            @import "@/assets/scss/includes/globals/transition.scss";
          `,
        },
      },
    },
  },

  components: [
    { path: '~/components/storyblok/content' },
    { path: '~/components/storyblok/form' },
    { path: '~/components/storyblok/templates' },
    { path: '~/components/site' },
  ],

  gsap: {},
  modules: [
    '@pinia/nuxt', // Vue Store
    '@nuxtjs/eslint-module',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.TOBIASMARTY_STORYBLOK_TOKEN,
        bridge: true,
        devtools: true,
      },
    ],
    '@hypernym/nuxt-gsap',
  ],
  build: {
    transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
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
  },
})
