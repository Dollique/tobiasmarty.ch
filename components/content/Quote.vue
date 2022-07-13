<template>
  <div :class="`align-${blok.image[0].align}`" class="quote-wrapper">
    <blockquote>
      <span class="quote">{{ blok.quote }}</span>
      <span class="author">{{ blok.author }}</span>
    </blockquote>

    <component :is="blok.image[0].component" :blok="blok.image[0]" />
  </div>
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
.quote-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;

  &.align {
    &-center {
      padding-left: $gutter;
      padding-right: $gutter;
    }
    &-left {
      padding-right: $gutter;
    }
    &-right {
      padding-left: $gutter;
    }
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    filter: blur(5px);
    -webkit-filter: blur(5px);

    z-index: -1;
  }

  blockquote {
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    padding: 10vw;
    text-transform: uppercase;

    @include fontSize(0.8rem, 2.5vw);
  }

  .quote {
    &:before,
    &:after {
      content: '"';
    }
  }

  .author {
    display: block;
    padding-top: 5%;
  }
}
</style>
