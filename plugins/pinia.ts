import { useNavigationStore } from '~/store/navigation'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      navigationStore: useNavigationStore($pinia),
    },
  }
})
