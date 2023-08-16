<template>
  <StoryblokComponent
    v-if="story"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>

<script setup>
// default view -> get everything from Storyblok
const story = await useAsyncStoryblok(
  'home-nuxt-3', // slug
  { version: 'draft', resolve_relations: 'global_reference.reference' }, // API Options
  { resolveRelations: ['global_reference.reference'] }, // Bridge Options
)

console.log('story', story)
console.log('content', story.content)

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response,
  })
}
</script>
