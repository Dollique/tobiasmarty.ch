import Vue from 'vue'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'

// Vue.use(VueRichTextRenderer)
import Teaser from '~/components/content/Title.vue'
import Image from '~/components/content/Image.vue'

Vue.component('SB_Image', Image)

Vue.use(VueRichTextRenderer, {
  resolvers: {
    components: {
      mytitle: Teaser,
      myimage: Image,
    },
  }
});


