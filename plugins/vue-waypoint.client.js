import { Waypoint } from 'vue-waypoint'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Waypoint)
})
