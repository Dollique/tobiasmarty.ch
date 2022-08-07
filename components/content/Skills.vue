<template>
  <div v-editable="blok" class="skills flex">
    <h3>{{ blok.title }}</h3>
    <div v-for="blok in blok.skill" :key="blok._uid" class="">
      <component :is="blok.component" :blok="blok" />
    </div>
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
.skills {
  flex-direction: column;

  @include for-tablet-portrait-up {
    flex-direction: row;
  }
}

h3 {
  font-weight: 700;
}
</style>