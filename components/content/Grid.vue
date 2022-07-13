<template>
  <div v-editable="blok" class="grid-wrapper flex">
    <div v-for="blok in blok.columns" :key="blok._uid" class="">
      <component :is="blok.component" :blok="blok" />
    </div>
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
.grid-wrapper {
  flex-direction: column;

  @include for-tablet-portrait-up {
    flex-direction: row;

    div {
      flex: 1.25;

      &:last-child {
        flex: 0.75;
      }
    }

    ::v-deep > *:not(.quote-wrapper) img {
      padding-top: 0;
      margin-top: 0;
    }
  }
}
</style>