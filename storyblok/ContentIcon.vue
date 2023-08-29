<template>
  <div v-editable="blok" class="icon" v-html="blok.icon_svg_code"></div>
</template>

<script setup lang="ts">
import type { ContentIconStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentIconStoryblok>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.icon {
  font-size: 0;
}
</style>
