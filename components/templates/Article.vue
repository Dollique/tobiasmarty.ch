<template>
  <div class="main-wrapper">
    <Header :blok="blok" />

    <main v-editable="blok">
      <h1>{{ blok.title }}</h1>

      <component
        :is="blok.component"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    @include addGutter;
  }

  h1 {
    padding-bottom: 50px;
  }

  h2 {
    margin-bottom: 14px;
    padding-left: 9px;
  }

  p,
  img {
    padding-bottom: 50px;
  }

  /*> *:not(.quote-wrapper) {
    img {
      width: 100%;
    }
  }*/

  > .quote-wrapper {
    width: 100%;
    margin-top: 7vw;
    margin-bottom: 9vw;
  }

  > *:last-child,
  > *:last-child img {
    //padding-bottom: 0;
    margin-bottom: 0;
  }
}
</style>
