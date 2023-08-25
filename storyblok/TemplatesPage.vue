<template>
  <div class="main-wrapper" :class="routeClass">
    <SiteHeader :blok="blok" :show-nav="blok.showNav" />

    <section v-editable="blok" class="page flex">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </section>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

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

  &::v-deep {
    p {
      @include addGutter;
    }
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

.grid-wrapper::v-deep {
  margin-top: 20px;
  align-items: center;

  h2,
  p {
    padding-bottom: 20px;
    padding-left: $gutter;
  }
}
</style>
