<template>
  <nav>
    <nuxt-link
      v-if="blok.link_prev.id !== ''"
      :to="'/' + blok.link_prev.cached_url"
      class="prev"
    >
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M36 35V1L2 16.3333L36 35Z" stroke="white" />
      </svg>

      <h2>{{ blok.link_prev.story.name }}</h2>
    </nuxt-link>

    <nuxt-link
      v-if="blok.link_next.id !== ''"
      :to="'/' + blok.link_next.cached_url"
      class="next"
    >
      <h2>{{ blok.link_next.story.name }}</h2>

      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 35V1L35 16.3333L1 35Z" stroke="white" />
      </svg>
    </nuxt-link>
  </nav>
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
nav {
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  @include for-tablet-portrait-up {
    flex-direction: row;
  }

  a {
    display: flex;
    align-items: center;
    margin: 0 auto;

    text-decoration: none;

    &:hover {
      svg path {
        fill: $color-white;
      }
    }

    &.prev {
      @include for-phone-only {
        margin-bottom: 30px;
      }
      h2 {
        margin-left: 17px;
      }
    }
    &.next {
      h2 {
        margin-right: 17px;
      }
    }
  }
}
</style>