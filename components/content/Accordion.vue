<template>
  <section class="accordion">
    <div v-for="blok in blok.item" :key="blok._uid" class="">
      <StoryblokComponent
        v-for="blok in blok.component"
        :key="blok._uid"
        :blok="blok"
        ref="childAccordion"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

const closeAll = function () {
  for (let childs of this.$refs.childAccordion) {
    childs.closeItems()
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.accordion {
  margin-bottom: $gap;
}
</style>
