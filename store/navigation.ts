import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navOpen: false,
  }),
  actions: {
    toggle() {
      this.navOpen = !this.navOpen
    },
    close() {
      this.navOpen = false
    },
  },
})
