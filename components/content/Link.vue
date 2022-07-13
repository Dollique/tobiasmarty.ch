<template>
  <nuxt-link v-editable="blok" :to="blok.href['cached_url']" :class="blok.type">
    <span>{{ blok.title }}</span>

    <svg
      width="59"
      height="76"
      viewBox="0 0 59 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.873657 73.7672V2L57.7128 34.3656L0.873657 73.7672Z"
        stroke="white"
        stroke-width="1.32184"
      />
    </svg>
  </nuxt-link>
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
a {
  display: flex;
  margin: 0 auto;
  align-items: center;

  font-size: 3em;
  text-decoration: none;

  &:after {
  }

  svg {
    margin-left: 20px;
  }

  &:hover {
    svg {
      fill: #ffffff;
    }
  }
}

.home {
  @include fontSize(2.5rem, 3.5vw);
  text-align: center;
}
</style>