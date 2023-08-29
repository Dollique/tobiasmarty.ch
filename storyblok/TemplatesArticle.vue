<template>
  <div class="main-wrapper">
    <SiteHeader :blok="blok" :show-nav="blok.showNav" />

    <main v-if="isClientRendered" v-editable="blok">
      <Waypoint
        v-for="childblok in blok.body"
        :key="childblok._uid"
        :options="options"
      >
        <StoryblokComponent :blok="childblok" />
      </Waypoint>
    </main>

    <!--SiteArticleNavigation :blok="blok" /-->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { Waypoint } from 'vue-waypoint'
import type { TemplatesArticleStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<TemplatesArticleStoryblok>,
    required: true,
  },
})

defineComponent({
  name: 'TemplatesArticle',
  components: {
    Waypoint,
  },
})

const isClientRendered = ref(false)

onMounted(() => {
  isClientRendered.value = true
})

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -100px 0px', // 0px 0px -100px 0px
  threshold: [0, 0.75], // script is executed at 0% and 75% visibility
}

// if I want to use onChange add @change="onChange" to <Waypoint> and import WaypointState
/* const onChange = (waypointState: WaypointState) => {
  const direction = waypointState.direction
  const going = waypointState.going

  console.log('direction: ' + direction)
  console.log('going', going)
} */
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: $page-max-width;
  margin: 0 auto;

  grid-template-rows: auto 1fr auto;
}

:deep(main) {
  p {
    @include addGutter;
  }

  /*> *:not(.quote-wrapper) {
    img {
      width: 100%;
    }
  }*/

  > .quote-wrapper {
    width: 100%;
    //margin-top: 7vw;
    //margin-bottom: 9vw;
  }
}
</style>
