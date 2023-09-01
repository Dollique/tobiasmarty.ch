<template>
  <SiteTemplate name="page" :blok="blok" />
</template>

<script setup lang="ts">
import type { TemplatesPageStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<TemplatesPageStoryblok>,
    required: true,
  },
})
</script>
