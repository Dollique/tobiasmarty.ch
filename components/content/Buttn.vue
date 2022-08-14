<template>
  <h2 class="buttons" v-editable="blok">
    <a v-if="blok.href.filename != ''" class="btn" :href="blok.href.filename">{{
      blok.name
    }}</a>
    <nuxt-link v-else class="btn" :to="blok.link['cached_url']">{{
      blok.name
    }}</nuxt-link>
  </h2>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.buttons {
  display: flex;
  justify-content: center;

  margin-bottom: $gap;
}

.btn {
  background-color: $color-hover;
  border: 1px solid $color-swiper-border;

  border-radius: 10px;
  padding: 30px 90px;

  text-decoration: none;

  transition: all 0.25s ease-in-out;

  @include for-tablet-portrait-up {
    &:hover {
      background-color: $color-swiper-border;
      color: $color-background;
    }
  }
}
</style>