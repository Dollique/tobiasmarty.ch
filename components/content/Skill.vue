<template>
  <div v-editable="blok" class="skill" :data-level="blok.level">
    {{ blok.name }}
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default() {
        return {}
      },
      required: false,
    },
    // when the component is used in rich-text I need the body property
    body: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.skill {
}
</style>
