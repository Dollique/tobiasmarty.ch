<template>
  <div>
    <Article :blok="articles.story.content" />
  </div>
</template>

<script>
import Article from '~/components/templates/Article.vue'

export default {
  components: {
    Article,
  },
  async asyncData(context) {
    // Load the JSON from the API
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const version = process.env.MNN_STORYBLOK_VERSION

    const [articlesRes] = await Promise.all([
      context.app.$storyapi.get(`cdn/stories/articles/${context.params.slug}`, {
        version,
        resolve_relations: 'global_reference.reference',
        resolve_links: 'url',
      }),

      /* context.app.$storyapi.get(`cdn/links/`, {
        starts_with: 'articles/', // exclude 'article' slug
        version,
        resolve_relations: 'global_reference.reference',
      }), */
    ]).catch((res) => {
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

    return {
      articles: articlesRes.data,
      // links: linksRes.data.links,
    }

    /* return context.app.$storyapi
      .get(`cdn/stories/articles/${context.params.slug}`, {
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
      }) */
  },
  data() {
    return {
      articles: { content: {} },
      links: {},
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
      storyblokInstance.on(['published', 'change'], () => {
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

