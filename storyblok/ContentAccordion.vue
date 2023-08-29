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
defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

const childAccordion = ref([])

const onCloseAll = function () {
  for (let [index, child] of childAccordion.value.entries()) {
    // check if closeItem function exists
    if (typeof childAccordion.value[index].closeItem === 'function') {
      childAccordion.value[index].closeItem()
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.accordion {
  margin-bottom: $gap;
}
</style>
