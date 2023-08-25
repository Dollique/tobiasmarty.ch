export default defineNuxtConfig({
  devtools: { enabled: false },
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
            @import "~/assets/scss/includes/globals/resets.scss";
            @import "@/assets/scss/includes/globals/transition.scss";
          `,
        },
      },
    },
  },

  components: [{ path: '~/components/site' }],

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
    'nuxt-swiper',
    '@hypernym/nuxt-gsap',
  ],

  app: {
    pageTransition: { name: 'pageTransition', mode: 'out-in' },
  },
})
