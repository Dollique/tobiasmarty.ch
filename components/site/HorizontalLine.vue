<template>
  <hr />
</template>

<script setup lang="ts">
const props = defineProps({
  blok: {
    type: Object,
    required: false,
    default: () => undefined,
  },
})

onMounted(() => {
  if (props && props.blok && props.blok.mirror) {
    document.querySelector('hr').classList.add('mirror')
  }
})
</script>

<style lang="scss" scoped>
hr {
  border: none;
  border-bottom: 1px $color-content solid;
  margin-top: 0px;
  width: 100%;
  position: relative;

  &.mirror {
    transform: scaleX(-1);
    margin-left: 0;
    margin-right: 9px;
  }

  &:after {
    content: '';
    display: block;
    height: 5px;
    width: 5px;
    background-color: $color-content;
    border-radius: 100%;
    position: absolute;
    left: 0px;
    top: -2px;
  }
}
</style>
