<template>
  <div
    ref="portfolio"
    v-editable="blok"
    class="portfolio-wrapper"
    @click="toggleActive"
  >
    <div class="portfolio__content">
      <StoryblokComponent
        v-for="childblok in blok.content"
        :key="childblok._uid"
        :blok="childblok"
        class="portfolio__content_item"
      />
    </div>

    <StoryblokComponent
      v-for="childBlok in blok.image"
      :key="childBlok._uid"
      :blok="childBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { ContentPortfolioStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentPortfolioStoryblok>,
    required: true,
  },
})

const portfolio: { value: HTMLElement | null } = ref(null)

const toggleActive = function (event: MouseEvent): void {
  const targetElement = event.target as HTMLElement | null
  if (!isLink(targetElement) && portfolio.value) {
    portfolio.value.classList.toggle('active')
  }
}

const isLink = function (element: HTMLElement | null): Boolean {
  // checks if element either is a link or has link parents
  while (element) {
    if (element.tagName === 'A') return true
    element = element.parentElement
  }
  return false
}
</script>

<style lang="scss" scoped>
.portfolio-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  box-shadow: 6px 8px 10px 3px rgba(0, 0, 0, 0.25);
  border: 1px $color-black solid;

  // is a mixin because @extend does not work on media queries
  @mixin porftolio-hover {
    .portfolio__content {
      opacity: 1;
      pointer-events: initial;
    }

    picture {
      filter: blur(5px);
      -webkit-filter: blur(5px);
    }
  }

  @include for-hover {
    &:hover {
      @include porftolio-hover;
    }
  }

  &.active {
    @include porftolio-hover;
  }

  picture {
    transition: filter 0.25s ease-in-out;

    max-width: 100%;
    width: 100%;
    height: 100%;

    z-index: 1;
  }

  :deep(picture) {
    margin-bottom: 0;
  }
}

.portfolio__content {
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
  pointer-events: none;

  background-color: rgba($color-black, 0.5);

  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  min-height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 5vw;
  gap: 40px;

  h1,
  h2,
  h3 {
    color: $color-white;
    padding-bottom: 0;
    text-align: center;
  }

  @include for-tablet-portrait-up {
    gap: 20px;
    padding: 2vw;
    min-height: initial;
    h3 {
      @include fontSize(1.2rem, 0.4vw);
    }
  }
  @include for-desktop-up {
    gap: 40px; // reset
    padding: 5vw; // reset
    h3 {
      @include fontSize(1.4rem, 0.4vw); // reset
    }
  }

  h3 {
    &:before,
    &:after {
      content: '';
      height: 2px;
      width: 44px;
      background-color: $color-white;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:before {
      margin-left: -38px;
    }
    &:after {
      margin-left: -6px;
    }
  }
}

.portfolio__content_item {
  position: relative; // because of h3 before/after
  width: 100%;
  text-align: center;
}
</style>
