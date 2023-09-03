<template>
  <NuxtPage />
  <TransitionGlitch />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useNavigationStore } from '~/store/navigation'
const navigationStore = useNavigationStore() // get the store data

const route = useRoute()

const navOpen = function () {
  return navigationStore.navOpen
}

watch(route, () => {
  navigationStore.toggle()
})

watch(navOpen, (value) => {
  const bodyElement = document.querySelector('body') as HTMLElement
  bodyElement.classList.toggle('navOpen', value)
})
</script>
