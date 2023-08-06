<template>
  <div v-editable="blok" class="portfolio-wrapper" v-on:click="toggleActive">
    <div
      class="portfolio__content"
      v-for="blok in blok.content"
      :key="blok._uid"
    >
      <component :is="blok.component" :blok="blok" />
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
    toggleActive() {
      this.isActive = !this.isActive
      this.$el.classList.toggle('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;

  box-shadow: 6px 8px 10px 3px rgba(0, 0, 0, 0.25);
  border: 1px $color-black solid;

  margin-bottom: $gap;

  @include for-tablet-portrait-up {
  }

  &.active,
  &:hover {
    .portfolio__content {
      opacity: 1;
    }

    picture {
      filter: blur(5px);
      -webkit-filter: blur(5px);
    }
  }

  picture {
    transition: filter 0.25s ease-in-out;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    max-width: initial;

    z-index: 1;
  }

  .portfolio__content {
    transition: opacity 0.25s ease-in-out;
    opacity: 0;

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
}
</style>
