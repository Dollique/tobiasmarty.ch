export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      STORYBLOK_VERSION: process.env.TOBIASMARTY_STORYBLOK_VERSION,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/includes/mixins/mediaqueries.scss";
            @import "@/assets/scss/includes/variables/colors.scss";
            @import "@/assets/scss/includes/variables/structure.scss";
            @import "@/assets/scss/includes/mixins/mixins.scss";
            @import "@/assets/scss/includes/globals/fonts.scss";
            @import "@/assets/scss/includes/globals/utilities.scss";
            @import "@/assets/scss/includes/globals/global.scss";
            @import "~/assets/scss/includes/globals/resets.scss";
            @import "@/assets/scss/includes/globals/transition.scss";
          `,
        },
      },
    },
  },

  components: [
    { path: '~/components/site' },
    { path: '~/components/transition' },
  ],

  gsap: {},
  build: {
    transpile: ['vue-waypoint'],
  },
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
    'nuxt-swiper',
    '@hypernym/nuxt-gsap',
  ],

  app: {
    pageTransition: { name: 'pageTransition', mode: 'out-in' },
  },
})
