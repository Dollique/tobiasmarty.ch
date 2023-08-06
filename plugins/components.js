import Vue from 'vue'

// Pages
import Page from '~/components/templates/Page.vue'

// content
import Swiper from '~/components/content/Swiper.vue'
import Skills from '~/components/content/Skills.vue'
import Skill from '~/components/content/Skill.vue'
import Accordion from '~/components/content/Accordion.vue'
import AccordionItem from '~/components/content/AccordionItem.vue'
import Teaser from '~/components/content/Title.vue'
import Grid from '~/components/content/Grid.vue'
import SliderText from '~/components/content/SliderText.vue'
import RichText from '~/components/content/RichText.vue'
import Image from '~/components/content/Image.vue'
import Quote from '~/components/content/Quote.vue'
import Buttn from '~/components/content/Buttn.vue'
import Portfolio from '~/components/content/Portfolio.vue'

// form
import FormSection from '~/components/form/FormSection.vue'
import FormInput from '~/components/form/FormInput.vue'
import Feature from '~/components/content/Link.vue'

// content-types
Vue.component('page', Page)

// selectable components
Vue.component('SB_Swiper', Swiper)
Vue.component('SB_Skills', Skills)
Vue.component('SB_Skill', Skill)
Vue.component('SB_Accordion', Accordion)
Vue.component('SB_Accordion_Item', AccordionItem)
Vue.component('SB_Title', Teaser)
Vue.component('SB_Grid', Grid)
Vue.component('SB_Slidertext', SliderText)
Vue.component('SB_Link', Feature)
Vue.component('SB_Richtext', RichText)
Vue.component('SB_Image', Image)
Vue.component('SB_Quote', Quote)
Vue.component('SB_Buttn', Buttn)
Vue.component('SB_Portfolio', Portfolio)
Vue.component('SB_Form-input', FormInput)
Vue.component('SB_Form-section', FormSection)
