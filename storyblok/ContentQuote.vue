<template>
  <div
    v-if="
      typeof blok !== 'undefined' &&
      typeof blok.image !== 'undefined' &&
      typeof blok.image[0].component !== 'undefined'
    "
    v-editable="blok"
    :class="`align-${blok.image[0].align} color-${blok.font_color}`"
    class="quote-wrapper"
  >
    <blockquote>
      <span class="quote">{{ blok.quote }}</span>
      <span class="author">{{ blok.author }}</span>
    </blockquote>

    <StoryblokComponent
      v-for="childBlok in blok.image"
      :key="childBlok._uid"
      :blok="childBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { ContentQuoteStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentQuoteStoryblok>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.quote-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;

  margin-bottom: var(--gap);

  &.color-white,
  &.color-white * {
    color: $color-content-neg;
  }

  &.align {
    &-center {
      padding-left: var(--gutter);
      padding-right: var(--gutter);
    }
    &-left {
      padding-right: var(--gutter);
    }
    &-right {
      padding-left: var(--gutter);
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
