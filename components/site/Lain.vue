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
  border-bottom: 1px $color-white solid;
  margin-top: 0px;
  margin-left: 9px;
  height: 7px;
  width: calc(100% - 9px);

  &.mirror {
    transform: scaleX(-1);
    margin-left: 0;
    margin-right: 9px;
  }

  &:before,
  &:after {
    content: '';

    display: block;
    height: 0px;
  }
  &:before {
    width: 20px;
    border-bottom: 1px $color-white solid;
    margin-left: 8px;
  }
  &:after {
    // width: calc(100vw - 9px - $gutter * 2);
    width: 20px;
    border-bottom: 1px $color-white solid;
    margin-top: 11px;
    margin-left: -7px;
  }
}
</style>