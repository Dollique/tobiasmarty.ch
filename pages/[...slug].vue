<template>
  <StoryblokComponent
    v-if="story"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>

<script setup>
const { slug } = useRoute().params
const config = useRuntimeConfig()

// default view -> get everything from Storyblok
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: config.public.STORYBLOK_VERSION,
    resolve_relations: 'global_reference.reference',
  }, // API Options
  { resolveRelations: ['global_reference.reference'] }, // Bridge Options
)

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response,
  })
}
</script>
