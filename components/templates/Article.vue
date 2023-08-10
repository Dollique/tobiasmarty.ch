<template>
  <div class="main-wrapper">
    <Header :blok="blok" />

    <main v-editable="blok" v-if="intersectionOptions">
      <component
        :is="blok.component"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
        class="waypoint"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
      />
    </main>

    <!--ArticleNavigation :blok="blok" /-->
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/site/Header.vue'
import Footer from '~/components/site/Footer.vue'
import ArticleNavigation from '~/components/site/ArticleNavigation.vue'

export default {
  components: {
    Header,
    Footer,
    ArticleNavigation,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    intersectionOptions: null, // Initially we set thresholds as null
  }),
  mounted() {
    window.addEventListener('load', () => {
      this.intersectionOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // 0px 0px -100px 0px
        threshold: [0, 0.75], // script is executed at 0% and 75% visibility
      } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    })
  },
  methods: {
    onWaypoint({ going, direction, el }) {
      if (
        // ignore horizontal changes (including fade-in animation)
        direction == this.$waypointMap.DIRECTION_LEFT ||
        direction == this.$waypointMap.DIRECTION_RIGHT
      ) {
        return
      }

      if (
        // initial load
        typeof direction === 'undefined' &&
        going === this.$waypointMap.GOING_IN
      ) {
        el.classList.add('waypoint-active')
        return
      } else {
        // behavior when scrolling

        // scrolling up
        if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
          if (going === this.$waypointMap.GOING_OUT) {
            el.classList.remove('waypoint-active')
          } else {
            el.classList.add('waypoint-active')
          }
        }

        // scrolling down
        if (going === this.$waypointMap.GOING_IN) {
          if (direction === this.$waypointMap.DIRECTION_TOP) {
            el.classList.add('waypoint-active')
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables/structure.scss';
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
