<template>
  <div v-editable="blok" class="richtext">
    <div v-html="renderedRichText"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

const renderedRichText = computed(() => renderRichText(props.blok.body))
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.richtext {
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
