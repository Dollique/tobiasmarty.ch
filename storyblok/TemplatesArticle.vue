<template>
  <SiteTemplate name="article" :blok="blok" />
</template>

<script setup lang="ts">
import type { TemplatesArticleStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<TemplatesArticleStoryblok>,
    required: true,
  },
})
</script>
