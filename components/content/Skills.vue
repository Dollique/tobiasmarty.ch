<template>
  <div v-editable="blok" class="skills flex">
    <h3>{{ blok.title }}</h3>
    <div v-for="blok in blok.skill" :key="blok._uid" class="">
      <StoryblokComponent
        v-for="blok in blok.component"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()
</script>

<style lang="scss" scoped>
.skills {
  flex-direction: column;
  padding: $gutter;
}

h3 {
  text-align: center;
  font-weight: 700;
  padding-bottom: 25px;
}
</style>
