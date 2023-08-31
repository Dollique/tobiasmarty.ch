<template>
  <picture v-editable="blok" :class="`align-${blok.align}`">
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
      v-if="blok.src"
      v-editable="blok"
      media="(min-width: 800px)"
      :src="blok.src.filename"
      :srcset="`${resize(blok.src.filename, '480x0')} 480w,
              ${resize(blok.src.filename, '800x0')} 800w,
              ${resize(blok.src.filename, '1200x0')} 1200w
              `"
    />
    <!-- Fallback to mobile -->
    <img
      v-if="blok.mobile"
      :src="blok.mobile.filename"
      :srcset="`${resize(blok.mobile.filename, '480x0')} 480w,
              ${resize(blok.mobile.filename, '800x0')} 800w,
              ${resize(blok.mobile.filename, '1200x0')} 1200w
              `"
    />
  </picture>
</template>

<script setup lang="ts">
import type { ContentImageStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentImageStoryblok>,
    required: true,
  },
})

const resize = function (image: string, option: string) {
  if (!image) return

  const imageService = '//a.storyblok.com'
  const path = image.replace('https://a.storyblok.com', '') // -> /f/148502/718x112/769dd796c1/mind-control1_mobile.jpg

  return imageService + path + '/m/' + option // -> //a.storyblok.com//400x100/f/148502/718x112/769dd796c1/mind-control1_mobile.jpg/m
}

onMounted(() => {
  // var example = '//a.storyblok.com/f/39898/bd04dbf53c/amp_blog.jpg'
  // console.log(this.resize(example, '500x500'))
})
</script>

<style lang="scss" scoped>
picture {
  display: block;
  margin-bottom: var(--gap);

  @include for-tablet-landscape-up {
    max-width: 50vw;
  }
  @include for-desktop-up {
    max-width: 45vw;
  }
  @include for-big-desktop-up {
    max-width: 40vw;
  }

  &.align {
    &-center {
      padding-left: var(--gutter);
      padding-right: var(--gutter);

      margin-right: auto;
      margin-left: auto;
    }
    &-left {
      padding-right: var(--gutter);
    }
    &-right {
      padding-left: var(--gutter);
    }

    &-full {
      max-width: initial;
    }
  }
}

picture,
picture source,
picture img {
  font-size: 0;
  line-height: 0;
}

img {
  width: 100%;
}

@media print {
  picture {
    &.align {
      &-center {
        text-align: center;

        img {
          max-height: 50vh;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
