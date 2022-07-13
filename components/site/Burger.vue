<template>
  <div class="menu btn1" :class="{ open: navOpen }" @click="toggle(navOpen)">
    <div class="icon-left"></div>
    <div class="icon-right"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    navOpen() {
      return this.$store.state.navigation.navOpen
    },
  },
  methods: {
    ...mapMutations({
      toggle: 'navigation/toggle',
    }),
  },
}
</script>

<style lang="scss" scoped>
$burger-height: 6px;
$burger-width: 25px;
$burger-width__center: 15px;
$burger-space: 15px;

$burger-ScaleX__open: 1;
$burger-translate__open: 5px;

@mixin btn($right, $top) {
  //position: absolute;
  width: 50px;
  height: 36px;
  top: $top;
  right: $right;
  transition-duration: 0.5s;

  display: flex;
}

@mixin icon($height, $width) {
  transition-duration: 0.5s;
  //position: absolute;
  height: $height;
  width: $burger-width__center;
  //top: 30px;
  transform: translateY(15px);
  background-color: $color-white;
}

@mixin icon-before($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $color-white;
  content: '';
  top: $top;
  //transform: translateY($top);
}

@mixin icon-after($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $color-white;
  content: '';
  top: $top;
  //transform: translateY($top);
}

.btn1 {
  @include btn(0px, 0px);

  .icon-left {
    @include icon($burger-height, $burger-width);
    left: 0px;

    &:before {
      @include icon-before($burger-height, $burger-width, -$burger-space);
    }

    &:after {
      @include icon-after($burger-height, $burger-width, $burger-space);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .icon-right {
    @include icon($burger-height, $burger-width);
    left: 30px;

    &:before {
      @include icon-before($burger-height, $burger-width, -$burger-space);
    }

    &:after {
      @include icon-after($burger-height, $burger-width, $burger-space);
    }
  }

  &.open {
    .icon-left {
      transition-duration: 0.5s;
      background: transparent;

      &:before {
        transform: rotateZ(45deg) scaleX($burger-ScaleX__open)
          translate($burger-translate__open, $burger-translate__open);
      }

      &:after {
        transform: rotateZ(-45deg) scaleX($burger-ScaleX__open)
          translate($burger-translate__open, -$burger-translate__open);
      }
    }

    .icon-right {
      transition-duration: 0.5s;
      background: transparent;

      &:before {
        transform: rotateZ(-45deg) scaleX($burger-ScaleX__open)
          translate(-$burger-translate__open, $burger-translate__open);
      }

      &:after {
        transform: rotateZ(45deg) scaleX($burger-ScaleX__open)
          translate(-$burger-translate__open, -$burger-translate__open);
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>