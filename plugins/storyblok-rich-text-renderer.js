import Vue from 'vue'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'

// Vue.use(VueRichTextRenderer)
import Teaser from '~/components/content/Title.vue'
import Image from '~/components/content/Image.vue'

// TODO: Test if Images in RichText works
Vue.component('SB_Image', Image)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueRichTextRenderer, {
    resolvers: {
      components: {
        mytitle: Teaser,
        myimage: Image,
      },
    }
  });
})
