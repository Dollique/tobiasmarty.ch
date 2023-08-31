<template>
  <section v-editable="blok" class="accordion">
    <!-- TODO: change to <StoryblokComponent when issue is fixed: https://github.com/storyblok/storyblok-nuxt/issues/537 -->
    <component
      :is="childblok.component"
      v-for="childblok in blok.item"
      :key="childblok._uid"
      ref="childAccordion"
      :blok="childblok"
      @closeAll="onCloseAll"
    />
  </section>
</template>

<script setup lang="ts">
import type { ContentAccordionStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentAccordionStoryblok>,
    required: true,
  },
})

const childAccordion = ref([{ closeItem() {} }]) // set closeItem() as default to TypeScript prevent error

const onCloseAll = function () {
  for (const [index] of childAccordion.value.entries()) {
    // check if closeItem function exists
    if (typeof childAccordion.value[index].closeItem === 'function') {
      childAccordion.value[index].closeItem()
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  margin-bottom: var(--gap);
}
</style>
