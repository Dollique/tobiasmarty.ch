<template>
  <div v-editable="blok" class="skills flex">
    <h3>{{ blok.title }}</h3>
    <StoryblokComponent
      v-for="childBlok in blok.skill"
      :key="childBlok._uid"
      :blok="childBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { ContentSkillsStoryblok } from '@/types/component-types-sb'

defineProps({
  blok: {
    type: Object as PropType<ContentSkillsStoryblok>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.skills {
  flex-direction: column;
  padding: var(--gutter);
}

h3 {
  text-align: center;
  font-weight: 700;
  padding-bottom: 25px;
}
</style>
