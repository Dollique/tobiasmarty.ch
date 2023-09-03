import { Waypoint } from 'vue-waypoint'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.component('Waypoint', Waypoint)
  }
})
