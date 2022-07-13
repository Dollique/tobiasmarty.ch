import Vue from 'vue'

// Pages
import Page from '~/components/templates/Page.vue'

// content
import Teaser from '~/components/content/Title.vue'
import Grid from '~/components/content/Grid.vue'
import SliderText from '~/components/content/SliderText.vue'
import RichText from '~/components/content/RichText.vue'
import Image from '~/components/content/Image.vue'
import Quote from '~/components/content/Quote.vue'

// form
import FormSection from '~/components/form/FormSection.vue'
import FormInput from '~/components/form/FormInput.vue'
import Feature from '~/components/content/Link.vue'

// content-types
Vue.component('page', Page)

// selectable components
Vue.component('SB_Title', Teaser)
Vue.component('SB_Grid', Grid)
Vue.component('SB_Slidertext', SliderText)
Vue.component('SB_Link', Feature)
Vue.component('SB_Richtext', RichText)
Vue.component('SB_Image', Image)
Vue.component('SB_Quote', Quote)
Vue.component('SB_Form-input', FormInput)
Vue.component('SB_Form-section', FormSection)
