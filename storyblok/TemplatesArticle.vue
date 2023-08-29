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

  // console.log('direction: ' + direction)
  // console.log('going', going)
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
