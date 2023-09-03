<template>
  <h2 class="button" :class="getClasses()">
    <a v-if="linkExternal != ''" class="btn" :href="linkExternal"><slot /></a>
    <nuxt-link v-else-if="linkInternal" class="btn" :to="linkInternal"
      ><slot
    /></nuxt-link>
    <button v-else class="btn"><slot /></button>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  linkInternal: {
    type: String,
    required: false,
    default: '',
  },
  linkExternal: {
    type: String,
    required: false,
    default: '',
  },
  addGutter: {
    type: Boolean,
    required: false,
    default: false,
  },
  addMarginBottom: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const getClasses = function () {
  const addGutter = props.addGutter ? ' add_gutter' : ''
  const addMarginBottom = props.addMarginBottom ? ' add_margin_bottom' : ''

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
  cursor: pointer;

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
