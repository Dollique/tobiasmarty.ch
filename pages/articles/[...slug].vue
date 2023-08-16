<template>
  <div>
    <TemplateArticle :blok="articles.story.content" />
  </div>
</template>

<script setup>
// default view -> get everything from Storyblok
const story = await useAsyncStoryblok(
  `cdn/stories/articles/:full_slug`, // slug
  { version: 'draft', resolve_relations: 'global_reference.reference' }, // API Options
  { resolveRelations: ['global_reference.reference'] }, // Bridge Options
)

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response,
  })
}
</script>
