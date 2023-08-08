<template>
  <div v-editable="blok" class="icon" v-html="blok.icon_svg_code"></div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
}
</style>
