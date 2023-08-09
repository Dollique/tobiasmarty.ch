<template>
  <div>
    <!-- internal link -->
    <nuxt-link
      v-if="blok.href['linktype'] === 'story'"
      v-editable="blok"
      :to="blok.href['cached_url']"
      :class="blok.type"
    >
      <span>{{ blok.title }}</span>
    </nuxt-link>

    <!-- external link -->
    <a
      :href="blok.href['cached_url']"
      v-if="blok.href['linktype'] === 'url'"
      target="_blank"
    >
      <span
        v-if="!Array.isArray(blok.blocklink) || blok.blocklink.length === 0"
        >{{ blok.title }}</span
      >
      <!-- block link (external) -->
      <div
        v-else
        class="link__block"
        v-for="blok in blok.blocklink"
        :key="blok._uid"
      >
        <component :is="blok.component" :blok="blok" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
// needed for Portfolio component (icon list)
::v-deep {
  .link__block {
    display: flex;
    justify-content: center;

    .icon {
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
}
</style>
