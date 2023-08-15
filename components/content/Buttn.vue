<template>
  <h2 class="button" v-editable="blok" :class="getClasses()">
    <a v-if="blok.href.filename != ''" class="btn" :href="blok.href.filename">{{
      blok.name
    }}</a>
    <nuxt-link v-else class="btn" :to="blok.link['cached_url']">{{
      blok.name
    }}</nuxt-link>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

const getClasses = function () {
  const add_gutter = this.blok.add_gutter ? ' add_gutter' : ''
  const add_margin_bottom = this.blok.add_margin_bottom
    ? ' add_margin_bottom'
    : ''

  return add_gutter + add_margin_bottom
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.button {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: $color-hover;
  border: 1px solid $color-swiper-border;

  border-radius: 10px;
  padding: 20px 40px;

  text-decoration: none;

  transition: all 0.25s ease-in-out;

  @include for-tablet-portrait-up {
    padding: 30px 90px;

    &:hover {
      background-color: $color-swiper-border;
      color: $color-background;
    }
  }
}
</style>
