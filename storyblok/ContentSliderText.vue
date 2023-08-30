<template>
  <div v-editable="blok" class="slider-wrapper">
    <template v-for="(blokChild, index) in blok.columns">
      <StoryblokComponent
        v-for="blokItem in blokChild.component"
        :key="blokItem._uid"
        :blok="blokItem"
        class="slider-item"
        :class="[`slider-index--${index}`]"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ContentSlidertextStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentSlidertextStoryblok>,
    required: true,
  },
})

onMounted(() => {
  boxRotation()
})

const boxRotation = function () {
  const instance = getCurrentInstance()

  if (instance) {
    // TODO: Needs Testing!
    // instance.appContext.config.globalProperties -> this was the idea of Phind
    const gsap = instance.appContext.config.globalProperties.$gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    })

    gsap.to('.slider-index--0', { autoAlpha: 1, duration: 1 })
    gsap.to('.slider-index--0', { autoAlpha: 0, duration: 1, delay: 2 })
    gsap.to('.slider-index--1', { autoAlpha: 1, duration: 1 })
    gsap.to('.slider-index--1', { autoAlpha: 0, duration: 1, delay: 2 })
    gsap.to('.slider-index--2', { autoAlpha: 1, duration: 1 })
    gsap.to('.slider-index--2', { autoAlpha: 0, duration: 1, delay: 2 })
  }
}
</script>

<style lang="scss" scoped>
.slider-wrapper {
  display: grid;
  align-items: center;

  padding: $gutter;
  padding-top: 0;
  padding-bottom: 2rem;
}
</style>

<style lang="scss" scoped>
.slider-item {
  //font-size: 2em;
  @include fontSize(1.5rem, 2.5vw);

  text-align: center;

  margin-top: 0;

  opacity: 0;
  grid-column: 1;
  grid-row: 1;
}
</style>
