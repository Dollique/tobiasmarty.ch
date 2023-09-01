<template>
  <div>
    <!-- internal link -->
    <nuxt-link
      v-if="blok.href && blok.href['linktype'] === 'story'"
      v-editable="blok"
      :to="blok.href['cached_url']"
      :class="blok.type"
    >
      <span>{{ blok.title }}</span>
    </nuxt-link>

    <!-- external link -->
    <a
      v-if="blok.href && blok.href['linktype'] === 'url'"
      :href="blok.href['cached_url']"
      target="_blank"
    >
      <span
        v-if="!Array.isArray(blok.blocklink) || blok.blocklink.length === 0"
        >{{ blok.title }}</span
      >
      <!-- block link (external) -->
      <StoryblokComponent
        v-for="blokChild in blok.blocklink"
        v-else
        :key="blokChild._uid"
        class="link__block"
        :blok="blokChild"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import type { ContentLinkStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentLinkStoryblok>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
// needed for Portfolio component (icon list)

:deep(.link__block) {
  display: flex;
  justify-content: center;

  &.icon {
    width: fit-content;
    font-size: 0;
    svg {
      transition: transform 0.4s ease-in-out;
    }
    &:hover {
      svg {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
