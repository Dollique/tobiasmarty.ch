<template>
  <div class="main-wrapper" :class="routeClass">
    <Header :blok="blok" :showNav="false" />

    <section v-editable="blok" class="page flex">
      <component
        :is="blok.component"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/site/Header.vue'
import Footer from '~/components/site/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    routeClass: '',
  }),
  fetch() {
    let getRouteClass
    if (typeof this.$nuxt.$route.params.slug !== 'undefined') {
      getRouteClass = this.$nuxt.$route.params.slug
    } else {
      getRouteClass = 'home'
    }

    this.routeClass = 'route__' + getRouteClass
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/mixins.scss';
@import 'assets/scss/imports/headers.scss';
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
  min-height: 100vh;

  display: grid;
  grid-template-rows: minmax(min-content, max-content) auto minmax(min-content, max-content);
  align-items: flex-start;

  &::v-deep {
    p {
      @include addGutter;
    }

    p,
    img {
      //padding-bottom: $gap;
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
