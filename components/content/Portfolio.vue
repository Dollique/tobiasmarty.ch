<template>
  <div v-editable="blok" class="portfolio-wrapper" v-on:click="toggleActive">
    <div class="portfolio__content">
      <div
        class="portfolio__content_item"
        v-for="blok in blok.content"
        :key="blok._uid"
      >
        <component :is="blok.component" :blok="blok" />
      </div>
    </div>

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
  methods: {
    toggleActive(event) {
      if (!this.isLink(event.target)) {
        this.isActive = !this.isActive
        this.$el.classList.toggle('active')
      }
    },
    isLink(element) {
      // checks if element either is a link or has link parents
      while (element) {
        if (element.tagName === 'A') return true
        element = element.parentElement
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

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

  @media (hover: hover) and (pointer: fine) {
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

  ::v-deep {
    picture {
      margin-bottom: 0;
    }
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
