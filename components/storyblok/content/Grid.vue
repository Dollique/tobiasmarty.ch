<template>
  <div v-editable="blok" class="grid-wrapper flex" :class="getClasses()">
    <div v-for="blok in blok.columns" :key="blok._uid">
      <StoryblokComponent
        v-for="blok in blok.component"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

const getClasses = function () {
  const force_row = this.blok.force_row ? 'force_row' : ''
  const add_gutter = this.blok.add_gutter ? ' add_gutter' : ''
  const add_margin_bottom = this.blok.add_margin_bottom
    ? ' add_margin_bottom'
    : ''
  const gap = this.blok.gap !== '' ? ' ' + this.blok.gap : ''

  const justify = this.blok.justify_content
    ? ' justify_' + this.blok.justify_content
    : ''

  return force_row + add_gutter + add_margin_bottom + gap + justify
}
</script>

<style lang="scss" scoped>
.grid-wrapper {
  flex-direction: column;

  flex-wrap: wrap;
  &.gap-1 > div {
    flex-basis: calc(50% - 0.5rem);
  }
  &.gap-2 > div {
    flex-basis: calc(50% - 1rem);
  }
  &.gap-3 > div {
    flex-basis: calc(50% - 1.5rem);
  }
  &.gap-4 > div {
    flex-basis: calc(50% - 2rem);
  }
  &.gap-5 > div {
    flex-basis: calc(50% - 2.5rem);
  }

  &.force_row {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      flex-basis: initial;
    }
  }
  &.justify_ {
    &flex-start {
      justify-content: flex-start;
    }
    &center {
      justify-content: center;
    }
    &space-around {
      justify-content: space-around;
    }
    &space-between {
      justify-content: space-between;
    }
    &space-evenly {
      justify-content: space-evenly;
    }
    &flex-end {
      justify-content: flex-end;
    }
  }

  @include for-tablet-portrait-up {
    flex-direction: row;
  }
}
</style>
