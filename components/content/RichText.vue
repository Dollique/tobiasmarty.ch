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
    p {
      padding-bottom: $gap;
    }
  }
}
</style>
