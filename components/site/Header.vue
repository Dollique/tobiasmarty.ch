<template>
  <header class="col-8" :class="{ navOpen }">
    <div class="wrapper-outer">
      <div class="grid grid-2col wrapper-inner">
        <template v-if="blok">
          <template v-for="myblok in blok.globals">
            <h1
              v-if="myblok.component === 'global_reference'"
              :key="myblok._uid"
              class="grid-2col__left"
            >
              <nuxt-link to="/">{{
                myblok.reference.content.site_title
              }}</nuxt-link>
            </h1>
          </template>
        </template>

        <aside v-if="showNav" class="grid-2col__right">
          <Burger />
        </aside>

        <Lain :mirror="true" class="line" />
      </div>
    </div>

    <Navigation :blok="blok" />
  </header>
</template>

<script>
import Burger from '~/components/site/Burger.vue'
import Navigation from '~/components/site/Navigation.vue'
import Lain from '~/components/site/Lain.vue'

export default {
  components: {
    Burger,
    Navigation,
    Lain,
  },
  props: {
    showNav: {
      required: false,
      type: Boolean,
      default: true,
    },
    blok: {
      type: Object,
      required: false,
      default: () => undefined,
    },
  },
  computed: {
    navOpen() {
      return this.$store.state.navigation.navOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/grid.scss';
@import 'assets/scss/imports/headers.scss';

header {
  @include addGutter;
  align-items: center;
  margin-bottom: 30px;

  @include for-desktop-up {
    margin-bottom: 60px;
  }
}

.wrapper-outer {
  min-height: 100px;

  display: flex;
}

.wrapper-inner {
  width: 100%;
  flex: 1 auto;
  align-items: center;
  align-content: center;
}

.line {
  grid-column: 1 / span 2;
  margin-top: 5px;
}

.grid-2col__left {
  @include for-tablet-landscape-up {
    padding-top: 0.8rem;
  }
  @include for-desktop-up {
    padding-top: 1.3rem;
  }
  @include for-big-desktop-up {
    padding-top: 2.3rem;
  }
}

a {
  text-decoration: none;
}

.navOpen {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100vh;
  top: 0;
  margin: 0;

  // grid-auto-rows: minmax(100px, auto) 1fr;
  flex-direction: column;
  align-items: flex-start;

  background-color: $color-primary;

  .wrapper-inner {
    margin: 0 $gutter;
  }
}
</style>
