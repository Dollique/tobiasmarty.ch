import VueWaypoint from 'vue-waypoint'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueWaypoint)
})
