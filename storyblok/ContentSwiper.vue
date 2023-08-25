<template>
  <section v-editable="blok" class="swiper" :class="`swiper-type-${blok.type}`">
    <Swiper
      class="swiper-wrapper"
      :modules="swiperOptions.modules"
      :autoplay="swiperOptions.autoplay"
      :loop="swiperOptions.loop"
      :slides-per-view="swiperOptions.slidesPerView"
      :pagination="swiperOptions.pagination"
      :auto-height="swiperOptions.autoHeight"
      :centered-slides="swiperOptions.centeredSlides"
      :space-between="swiperOptions.spaceBetween"
      :slide-to-clicked-slide="swiperOptions.slideToClickedSlide"
      :breakpoints="swiperOptions.breakpoints"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="childBlok in blok.item"
        :key="childBlok._uid"
      >
        <StoryblokComponent :blok="childBlok" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

const swiperSkillsOptions = {
  pagination: {
    clickable: true,
  },

  //loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10,
  slideToClickedSlide: true,

  breakpoints: {
    640: {
      //slidesPerView: 2,
      //spaceBetween: 20,
      spaceBetween: 20,
    },
    768: {
      //slidesPerView: 4,
      //spaceBetween: 40,
      spaceBetween: 30,
    },
    1024: {
      //slidesPerView: 5,
      //spaceBetween: 50,
      spaceBetween: 40,
    },
  },
}

const swiperImgOptions = {
  modules: [SwiperAutoplay, SwiperPagination],

  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  autoHeight: true,

  pagination: {},

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  /* breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }, */
}

let swiperOptions
if (props.blok.type === 'skillbox') {
  swiperOptions = swiperSkillsOptions
} else if (props.blok.type === 'img') {
  swiperOptions = swiperImgOptions
}
</script>

<style lang="scss" scoped>
.swiper-type-skillbox {
  width: 100%;
  //width: 100vw;
  height: 100%;
  margin-bottom: 50px;
  padding-bottom: 1px; // fix firefox issue with border-bottom

  &-image {
    padding: 12px;
  }
  &-box {
    padding: 0 23px;
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

    width: 60vw;
    cursor: pointer;

    @include for-tablet-portrait-up {
      width: 40vw;
    }

    @include for-desktop-up {
      width: 20vw;
    }
  }
}

@media print {
  .swiper-type-skillbox {
    .swiper-wrapper {
      flex-direction: column;
    }
    .swiper-slide {
      margin-bottom: 20px;
    }
  }
}

/* SWIPER - IMAGE */
.swiper-type-img {
  margin-bottom: 20px;
  padding-bottom: 10px;

  .swiper-slide {
    ::v-deep {
      picture {
        max-width: inherit;
        //max-height: 385px;
        //display: flex;
        //flex-direction: column;

        @include for-tablet-portrait-up {
          //max-height: 850px;
          margin-left: 25vw;
          margin-right: 25vw;
        }

        img {
          //height: 100%;
          object-fit: contain;
          max-height: 80vh;
        }
      }
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  color: $color-content-neg;

  &:after {
    font-size: 26px;
    @include fontSize(1.4rem, 1.5vw);
  }
}

::v-deep {
  .swiper-pagination {
    background: transparent;

    display: flex;
    justify-content: center;
    padding: 0 10%;
    bottom: 17px;

    .swiper-pagination-bullet {
      background: $color-content;
    }
  }
}
</style>
