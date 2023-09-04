<template>
  <SiteTemplate name="article" :blok="blok" :meta="meta" />
</template>

<script setup lang="ts">
import type { TemplatesArticleStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<TemplatesArticleStoryblok>,
    required: true,
  },
  meta: {
    type: Object as PropType<SBMetaData>,
    required: true,
  },
})
</script>
