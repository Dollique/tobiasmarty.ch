<template>
  <header class="col-8" :class="navigationStore.navOpen">
    <div class="wrapper-outer">
      <div class="grid grid-2col wrapper-inner">
        <h1 class="grid-2col__left">
          <nuxt-link to="/">{{ name }}</nuxt-link>
        </h1>

        <aside v-if="showNav" class="grid-2col__right">
          <SiteBurger />
        </aside>

        <HorizontalLine :mirror="true" class="line" />
      </div>
    </div>

    <SiteNavigation v-if="showNav" :nav="nav" />
  </header>
</template>

<script setup lang="ts">
import { useNavigationStore } from '~/store/navigation'
const navigationStore = useNavigationStore() // get the store data

defineProps({
  name: {
    type: String as PropType<string>,
    required: false,
    default: 'test',
  },
  showNav: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  nav: {
    type: Object as PropType<HeaderNav>,
    required: false,
    default: () => {},
  },
})
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
  //min-height: 100px;
  display: flex;
  margin-top: 20px;
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
  /*@include for-tablet-landscape-up {
    padding-top: 0.8rem;
  }
  @include for-desktop-up {
    padding-top: 1.3rem;
  }
  @include for-big-desktop-up {
    padding-top: 2.3rem;
  }*/
}

h1 {
  display: flex;
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

  background-color: $color-background;

  .wrapper-inner {
    margin: 0 var(--gutter);
  }
}
</style>
