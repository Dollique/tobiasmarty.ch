<template>
  <section v-editable="blok" class="swiper" :class="`swiper-type-${blok.type}`">
    <div class="swiper-wrapper">
      <div v-for="blok in blok.item" :key="blok._uid" class="swiper-slide">
        <component :is="blok.component" :blok="blok" />
      </div>
    </div>

    <div
      ref="pagination"
      class="swiper-pagination"
      v-if="blok.type == 'img'"
    ></div>
  </section>
</template>

<script>
import Swiper, { Pagination, Autoplay } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
//import 'swiper/css/pagination';
//import 'swiper/css';

export default {
  components: {
    Swiper,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { swiperInitialized: false }
  },
  computed: {
    isSwiperInitialized: {
      get() {
        return this.swiperInitialized
      },
      set(value) {
        this.swiperInitialized = value
      },
    },
  },
  methods: {
    initSwiper() {
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
        modules: [Pagination, Autoplay],
        pagination: {
          el: this.$refs.pagination,
          clickable: true,
        },

        //loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        autoHeight: true,

        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },

        /*breakpoints: {
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
        },*/
      }

      if (this.blok.type == 'skillbox') {
        const swiperSkills = new Swiper(this.$el, swiperSkillsOptions)
      } else if (this.blok.type == 'img') {
        const swiperIMG = new Swiper(this.$el, swiperImgOptions)
      }
    },
  },
  mounted() {
    if (!this.isSwiperInitialized) {
      this.initSwiper()
      this.isSwiperInitialized = true
    }
  },
  updated() {
    if (!this.isSwiperInitialized) {
      this.initSwiper()
      this.isSwiperInitialized = true
    }
  },
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
          margin: 0 25vw;
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

.swiper-pagination {
  background: transparent;

  display: flex;
  justify-content: center;
  padding: 0 10%;
  bottom: 32px;

  ::v-deep {
    .swiper-pagination-bullet {
      background: $color-content;
    }
  }
}
</style>
