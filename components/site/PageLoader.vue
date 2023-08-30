<template>
  <div v-if="loading" class="loader">
    <svg
      width="122"
      height="50"
      viewBox="0 0 122 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="square1"
        x="0.5"
        y="0.5"
        width="49"
        height="49"
        stroke="black"
      />
      <rect
        id="square2"
        x="61.5"
        y="18.5"
        width="31"
        height="31"
        stroke="black"
      />
      <rect
        id="square3"
        x="105.5"
        y="33.5"
        width="16"
        height="16"
        stroke="black"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loading = ref(true)

nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  font-weight: bold;

  svg {
    overflow: visible;
  }
}

#square1,
#square2,
#square3 {
  transform-origin: center;
  transform-box: fill-box;
  animation: scale 1.5s infinite;

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
}

@keyframes scale {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(0.4) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>
