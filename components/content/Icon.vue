<template>
  <div v-editable="blok" class="icon" v-html="blok.icon_svg_code"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()
</script>

<style lang="scss" scoped>
.icon {
  font-size: 0;
}
</style>
