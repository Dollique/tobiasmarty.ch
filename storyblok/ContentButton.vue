<template>
  <GlobalButton
    :link-external="
      blok.href && blok.href.filename != '' ? blok.href.filename : ''
    "
    :link-internal="blok.link ? blok.link['cached_url'] : ''"
    :add-gutter="blok.add_gutter"
    :add-margin-bottom="blok.add_margin_bottom"
    >{{ blok.name }}</GlobalButton
  >
</template>

<script setup lang="ts">
import type { ContentButtonStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentButtonStoryblok>,
    required: true,
  },
})
</script>
