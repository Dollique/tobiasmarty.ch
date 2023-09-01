<template>
  <div v-editable="blok" class="richtext">
    <div v-dompurify-html="renderedRichText"></div>
  </div>
</template>

<script setup lang="ts">
import type { ContentRichtextStoryblok } from '@/types/component-types-sb'

const props = defineProps({
  blok: {
    type: Object as PropType<ContentRichtextStoryblok>,
    required: true,
  },
})

const renderedRichText = computed(() => renderRichText(props.blok.body))
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.richtext {
  margin-bottom: var(--gap);

  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    @include addGutter;
  }

  :deep(h1) {
    padding-bottom: var(--title-gap);
  }

  :deep(p) {
    @include addGutter;
    padding-bottom: var(--p-margin);

    &:last-child {
      padding-bottom: 0;
    }

    a {
      @extend .link;
    }
  }

  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    padding-bottom: calc(var(--title-gap) / 2);
  }
}
</style>
