<template>
  <div class="main-wrapper">
    <SiteHeader :blok="blok" :show-nav="blok.showNav" />

    <main v-if="isClientRendered" v-editable="blok">
      <Waypoint
        v-for="childblok in blok.body"
        :key="childblok._uid"
        :options="options"
        @change="onChange"
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

defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

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

const onChange = (waypointState: WaypointState) => {
  const direction = waypointState.direction
  const going = waypointState.going
  const el = waypointState.element

  console.log('direction: ' + direction)
  console.log('going', going)

  /*
  if (
    // ignore horizontal changes (including fade-in animation)
    direction === 'direction-left' ||
    direction === 'direction-right'
  ) {
    return
  }

  if (
    // initial load
    typeof direction === 'undefined' &&
    going === 'going-in'
  ) {
    el.classList.add('waypoint-active')
  } else {
    // behavior when scrolling

    // scrolling up
    if (direction === 'direction-bottom') {
      if (going === 'going-out') {
        el.classList.remove('waypoint-active')
      } else {
        el.classList.add('waypoint-active')
      }
    }

    // scrolling down
    if (going === 'going-in') {
      if (direction === 'direction-top') {
        el.classList.add('waypoint-active')
      }
    }
  }
  */
}
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

main::v-deep {
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
