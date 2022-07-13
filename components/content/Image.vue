<template>
  <picture :class="`align-${blok.align}`">
    <source
      v-if="blok.mobile && blok.mobile.id"
      media="(max-width: 799px)"
      :src="blok.mobile.filename"
      :srcset="`${resize(blok.mobile.filename, '480x0')} 480w,
              ${resize(blok.mobile.filename, '800x0')} 800w,
              ${resize(blok.mobile.filename, '1200x0')} 1200w
              `"
    />
    <source
      v-editable="blok"
      media="(min-width: 800px)"
      :src="blok.src.filename"
      :srcset="`${resize(blok.src.filename, '480x0')} 480w,
              ${resize(blok.src.filename, '800x0')} 800w,
              ${resize(blok.src.filename, '1200x0')} 1200w
              `"
    />
    <img
      :src="blok.src.filename"
      :srcset="`${resize(blok.src.filename, '480x0')} 480w,
              ${resize(blok.src.filename, '800x0')} 800w,
              ${resize(blok.src.filename, '1200x0')} 1200w
              `"
    />
  </picture>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    resize(image, option) {
      if (!image) return

      let imageService = '//img2.storyblok.com/'
      let path = image.replace('https://a.storyblok.com', '') // -> /f/148502/718x112/769dd796c1/mind-control1_mobile.jpg

      return imageService + option + path // -> //img2.storyblok.com//400x100/f/148502/718x112/769dd796c1/mind-control1_mobile.jpg
    },
  },
  mounted() {
    // var example = '//a.storyblok.com/f/39898/bd04dbf53c/amp_blog.jpg'
    // console.log(this.resize(example, '500x500'))
  },
}
</script>

<style lang="scss" scoped>
picture {
  display: block;

  &.align {
    &-center {
      padding-left: $gutter;
      padding-right: $gutter;
    }
    &-left {
      padding-right: $gutter;
    }
    &-right {
      padding-left: $gutter;
    }
  }
}

img {
  width: 100%;
}
</style>
