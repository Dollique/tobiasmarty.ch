<template>
  <div
    v-editable="blok"
    :class="`align-${blok.image[0].align} color-${blok.font_color}`"
    class="quote-wrapper"
  >
    <blockquote>
      <span class="quote">{{ blok.quote }}</span>
      <span class="author">{{ blok.author }}</span>
    </blockquote>

    <StoryblokComponent
      v-for="blok in blok.image[0].component"
      :key="blok._uid"
      :blok="blok.image[0]"
    />
  </div>
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
.quote-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;

  margin-bottom: $gap;

  &.color-white,
  &.color-white * {
    color: $color-content-neg;
  }

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
    top: -10px;
    left: -10px;
    right: 0;
    bottom: 0;

    max-width: initial;

    filter: blur(5px);
    -webkit-filter: blur(5px);

    z-index: 1;

    @include for-tablet-landscape-up {
      top: -200px;
    }
    @include for-desktop-up {
      top: -230px;
    }
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

    position: relative;
    z-index: 5;
  }

  .quote,
  .author {
    @include fontSize(1.1rem, 1vw);
    @include fontFamily('Righteous');
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
