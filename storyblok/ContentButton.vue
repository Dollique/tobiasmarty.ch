<template>
  <h2 v-editable="blok" class="button" :class="getClasses()">
    <a
      v-if="blok.href && blok.href.filename != ''"
      class="btn"
      :href="blok.href.filename"
      >{{ blok.name }}</a
    >
    <nuxt-link
      v-else-if="blok.link"
      class="btn"
      :to="blok.link['cached_url']"
      >{{ blok.name }}</nuxt-link
    >
  </h2>
</template>

<script setup lang="ts">
import type { ContentButtonStoryblok } from '@/types/component-types-sb'

const props = defineProps({
  blok: {
    type: Object as PropType<ContentButtonStoryblok>,
    required: true,
  },
})

const getClasses = function () {
  const addGutter = props.blok.add_gutter ? ' add_gutter' : ''
  const addMarginBottom = props.blok.add_margin_bottom
    ? ' add_margin_bottom'
    : ''

  return addGutter + addMarginBottom
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
