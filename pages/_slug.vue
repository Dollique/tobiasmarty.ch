<template>
  <component
    :is="story.content.component"
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>

<script>
export default {
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const version = process.env.MNN_STORYBLOK_VERSION

    const fullSlug =
      context.route.path === '/' || context.route.path === ''
        ? 'home'
        : context.route.path

    // Load the JSON from the API - loadig the home content (index page)

    const myData = context.app.$storyapi
      .get('cdn/stories/' + fullSlug, {
        version,
        resolve_relations: 'global_reference.reference',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)

          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)

          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })

    /* getGlobals = context.app.$storyapi

    console.log('MY DATA', myData)
    .get('cdn/stories/' + fullSlug, {
        version,
      })
      .then((res) => {
        return res.data
      }) */

    return myData
  },

  data() {
    return {
      story: { content: {} },
    }
  },

  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content

      storyblokInstance.on('input', (event) => {
        console.log(this.story.content)

        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events

      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()

        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,

          force: true,
        })
      })
    })
  },
}
</script>