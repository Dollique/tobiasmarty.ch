<template>
  <hr />
</template>

<script>
export default {
  props: {
    mirror: {
      type: Boolean,
      required: false,
    },
  },
  mounted() {
    if (this.mirror) {
      document.querySelector('hr').classList.add('mirror')
    }
  },
}
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
