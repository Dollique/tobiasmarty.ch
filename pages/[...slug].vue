<template>
  <StoryblokComponent
    v-if="story"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>

<script setup lang="ts">
const { slug } = useRoute().params
const config = useRuntimeConfig()

let route = ''
if (slug.constructor === Array && slug.length > 0) {
  route = slug.join('/')
} else {
  route = slug === '' ? 'home' : (slug as string)
}

// default view -> get everything from Storyblok
const story = await useAsyncStoryblok(
  route,
  {
    version: config.public.STORYBLOK_VERSION as 'draft' | 'published',
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
