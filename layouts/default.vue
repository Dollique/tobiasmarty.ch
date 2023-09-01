<template>
  <NuxtPage />
  <TransitionGlitch />
</template>

<script setup>
import { watch } from 'vue'

const { $navigationStore } = useNuxtApp() // get the store data
const route = useRoute()

const navOpen = function () {
  return $navigationStore.navOpen
}

watch(route, () => {
  $navigationStore.toggle()
})

watch(navOpen, (value) => {
  document.querySelector('body').classList.toggle('navOpen', value)
})
</script>
