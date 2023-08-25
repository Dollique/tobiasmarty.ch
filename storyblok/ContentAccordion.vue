<template>
  <section v-editable="blok" class="accordion">
    <!-- TODO: change to <StoryblokComponent when issue is fixed: https://github.com/storyblok/storyblok-nuxt/issues/537 -->
    <component
      v-for="childblok in blok.item"
      :key="childblok._uid"
      :is="childblok.component"
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

// TODO: fix this -> closeItems is not exposed from child component
const onCloseAll = function () {
  for (let [index, child] of childAccordion.value.entries()) {
    // check if closeItems function exists
    if (typeof childAccordion.value[index].closeItems === 'function') {
      // console.log(JSON.parse(JSON.stringify(childAccordion.value)))
      // console.log(JSON.parse(JSON.stringify(childAccordion.value[index])))
      // console.log('CHILD', childAccordion.value[index])
      // console.log('CHILD 22', childAccordion.value[index].accordionItem.value)
      childAccordion.value[index].closeItems()
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
