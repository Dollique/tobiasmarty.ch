<template>
  <div class="main-wrapper" :class="routeClass">
    <SiteHeader :blok="blok" :show-nav="blok.showNav" />

    <PageLoader />
    <section v-if="isClientRendered" v-editable="blok" class="page flex">
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
import PageLoader from '~/components/site/PageLoader.vue'

defineProps({
  blok: {
    type: Object as PropType<TemplatesPageStoryblok>,
    required: true,
  },
})

const isClientRendered = ref(false)

onMounted(() => {
  isClientRendered.value = true
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
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
  @include addTemplateWrapper;

  display: grid;
  grid-template-rows: minmax(min-content, max-content) auto minmax(
      min-content,
      max-content
    );
}

:deep(.page) {
  p {
    @include addGutter;
  }
}

// Flexbox

.page {
  flex-direction: column;
  justify-content: center;
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
    padding-left: var(--gutter);
  }
}
</style>
