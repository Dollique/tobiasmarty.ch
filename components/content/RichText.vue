<template>
  <div class="richtext">
    <rich-text-renderer v-if="blok.body" :document="blok.body" />
  </div>
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

.richtext  {
  ::v-deep {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @include addGutter;
    }

    p,
    h1 {
      padding-bottom: $gap;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      padding-bottom: calc($gap / 2);
    }
  }
}
</style>
