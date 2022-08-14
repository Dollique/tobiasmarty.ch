<template>
  <section class="accordion">
    <div v-for="blok in blok.item" :key="blok._uid" class="">
      <component :is="blok.component" :blok="blok" ref="childAccordion" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeAll() {
      for (let childs of this.$refs.childAccordion) {
        childs.closeItems()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.accordion {
  margin-bottom: $gap;
}
</style>