<template>
  <SiteTemplate name="page" :blok="blok" :meta="meta" />
</template>

<script setup lang="ts">
import type { TemplatesPageStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<TemplatesPageStoryblok>,
    required: true,
  },
  meta: {
    type: Object as PropType<SBMetaData>,
    required: true,
  },
})
</script>
