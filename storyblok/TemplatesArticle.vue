<template>
  <div class="main-wrapper">
    <SiteHeader :blok="blok" :show-nav="blok.showNav" />

    <PageLoader class="loader" />
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
import PageLoader from '~/components/site/PageLoader.vue'

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
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
  @include addTemplateWrapper;

  display: flex;
  flex-direction: column;
  // grid-template-rows: auto 1fr auto;
  // margin: 0 auto;
  // position: relative;
}

main {
  width: 100%;
}

.loader {
  margin: auto;
}

:deep(main) {
  p {
    @include addGutter;
  }
}
</style>
