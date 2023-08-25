<template>
  <div class="main-wrapper">
    <SiteHeader :blok="blok" :show-nav="blok.showNav" />

    <main v-if="isClientRendered" v-editable="blok">
      <Waypoint :options="options" @change="onChange">
        <StoryblokComponent
          v-for="childblok in blok.body"
          :key="childblok._uid"
          :blok="childblok"
          class="waypoint"
        />
      </Waypoint>
    </main>

    <!--SiteArticleNavigation :blok="blok" /-->
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

defineComponent({
  name: 'TemplatesArticle',
  components: {
    Waypoint: () => {
      if (process.client) {
        return import('vue-waypoint')
      }
    },
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

const onChange = (waypointState) => {
  const direction = waypointState.direction
  const going = waypointState.going
  const el = waypointState.element

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
