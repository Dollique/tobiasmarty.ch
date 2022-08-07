<template>
  <section v-editable="blok" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="blok in blok.item" :key="blok._uid" class="swiper-slide">
        <component :is="blok.component" :blok="blok" />
      </div>
    </div>

    <div class="swiper-pagination" v-if="blok.type == 'image'"></div>
  </section>
</template>

<script>
//import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css',
        },
      ],
    }
  },
  mounted() {
    const swiperOptions = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      //loop: true,
      slidesPerView: 2,
      spaceBetween: 10,
    }

    const swiper = new Swiper('.swiper', swiperOptions)
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  //width: 100vw;
  height: 100%;

  &-image {
    padding: 12px;
  }
  &-box {
    padding: 0 23px;
  }
}

.swiper-wrapper {
  /*display: block;
  overflow: hidden;
  height: auto;*/
}

.swiper-slide {
  font-size: 18px;

  background: $color-swiper;
  border: 1px solid $color-swiper-border;
  border-radius: 10px;
}

.swiper-button-next,
.swiper-button-prev {
  color: $color-primary;

  &:after {
    font-size: 26px;
    @include fontSize(1.4rem, 1.5vw);
  }
}

.swiper-pagination {
  background: transparent;

  display: flex;
  padding: 0 10%;
  bottom: 32px;

  ::v-deep {
    .swiper-pagination-bullet {
      background: $color-primary;
      opacity: 0.4;
      width: 100%;
      border-radius: 0;

      &-active {
        opacity: 1;
      }
    }
  }
}
</style>
