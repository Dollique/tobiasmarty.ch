<template>
  <div v-editable="blok" class="slider-wrapper">
    <template v-for="(blok, index) in blok.columns">
      <component
        :is="blok.component"
        :key="blok._uid"
        :blok="blok"
        class="slider-item"
        :class="[`slider-index--${index}`]"
      />
    </template>
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
  mounted() {
    this.boxRotation()
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap.timeline({ repeat: -1, repeatDelay: 1 })

      gsap.to('.slider-index--0', { autoAlpha: 1, duration: 1 })
      gsap.to('.slider-index--0', { autoAlpha: 0, duration: 1, delay: 2 })
      gsap.to('.slider-index--1', { autoAlpha: 1, duration: 1 })
      gsap.to('.slider-index--1', { autoAlpha: 0, duration: 1, delay: 2 })
      gsap.to('.slider-index--2', { autoAlpha: 1, duration: 1 })
      gsap.to('.slider-index--2', { autoAlpha: 0, duration: 1, delay: 2 })
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-wrapper {
  display: grid;
  align-items: center;

  padding: $gutter;
  padding-top: 0;
  padding-bottom: 2rem;
}
</style>

<style lang="scss" scoped>
.slider-item {
  //font-size: 2em;
  @include fontSize(1.5rem, 2.5vw);

  text-align: center;

  margin-top: 0;

  opacity: 0;
  grid-column: 1;
  grid-row: 1;
}
</style>