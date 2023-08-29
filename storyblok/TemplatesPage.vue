<template>
  <div class="main-wrapper" :class="routeClass">
    <SiteHeader :blok="blok" :show-nav="blok.showNav" />

    <section v-editable="blok" class="page flex">
      <StoryblokComponent
        v-for="blokChild in blok.body"
        :key="blokChild._uid"
        :blok="blokChild"
      />
    </section>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import type { TemplatesPageStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<TemplatesPageStoryblok>,
    required: true,
  },
})

const getRouteClass = useRoute()
let routeClass = 'route__'

if (typeof getRouteClass.params.slug !== 'undefined') {
  routeClass += getRouteClass.params.slug
} else {
  routeClass += 'home'
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
  min-height: 100vh;

  display: grid;
  grid-template-rows: minmax(min-content, max-content) auto minmax(
      min-content,
      max-content
    );
  align-items: flex-start;
}

:deep(.main-wrapper) {
  p {
    @include addGutter;
  }
}

// Flexbox

.page {
  flex-direction: column;
  justify-content: center;
}

// Home

.route__home .page {
  /*position: absolute;
  height: 100vh;*/
  width: 100%;
}

// background

[data-bg-image-mobile] {
  background-image: var(--bg-image-mobile);
}

@include for-desktop-up {
  [data-bg-image-desktop] {
    background-image: var(--bg-image-desktop);
  }
}

/*
 * CONTENT
*/

// GRID component

:deep(.grid-wrapper) {
  margin-top: 20px;
  align-items: center;

  h2,
  p {
    padding-bottom: 20px;
    padding-left: $gutter;
  }
}
</style>
