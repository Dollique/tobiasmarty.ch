<template>
  <div
    v-editable="blok"
    v-dompurify-html="blok.icon_svg_code"
    class="icon"
  ></div>
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
