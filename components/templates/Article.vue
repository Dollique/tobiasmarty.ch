<template>
  <div class="main-wrapper">
    <Header :blok="blok" />

    <main v-editable="blok">
      <component
        :is="blok.component"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
        class="waypoint"
        v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" />
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
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: [0.25, 0.75] // [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
  methods: {
    onWaypoint ({ going, direction, el }) {
      console.log('going', going);
      console.log('direction', direction);
      console.log('EL', el);

      // scrolling up
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        if (going === this.$waypointMap.GOING_OUT) {
          console.log('OUT', el);
          el.classList.remove('waypoint-active');
        } else {
          el.classList.add('waypoint-active');
        }
      }

      // scrolling down
      if (going === this.$waypointMap.GOING_IN) {
        if (direction !== this.$waypointMap.DIRECTION_BOTTOM) {
          el.classList.add('waypoint-active');
        }
      }
    }
  }
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
