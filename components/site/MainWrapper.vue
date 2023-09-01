<template>
  <div class="site-wrapper" :class="cssClasses">
    <SiteHeader
      :blok="blok"
      :show-nav="blok ? blok.showNav : null"
      :name="headerName"
    />

    <PageLoader v-if="name !== 'error'" class="loader" />
    <main v-if="isClientRendered && name === 'article'">
      <slot />
    </main>
    <main v-else-if="isClientRendered && (name === 'page' || name === 'error')">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import type {
  TemplatesPageStoryblok,
  TemplatesArticleStoryblok,
} from '@/types/component-types-sb'

const props = defineProps({
  blok: {
    type: Object as PropType<
      TemplatesPageStoryblok | TemplatesArticleStoryblok
    >,
    required: false,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  headerName: {
    type: String,
    required: false,
    default: '',
  },
})

// check if rendered

const isClientRendered = ref(false)

onMounted(() => {
  isClientRendered.value = true
})

// define routeClass

const getRouteClass = useRoute()
const getRoute = getRouteClass.params.slug
let routeClass = 'route__'

if (typeof getRoute !== 'undefined' && getRoute !== '') {
  routeClass += getRouteClass.params.slug
} else {
  routeClass += 'home'
}

// css classes
const cssClasses = routeClass + ' ' + props.name
</script>

<style lang="scss" scoped>
.site-wrapper {
  @include addTemplateWrapper;
}

.page,
.error {
  display: grid;
  grid-template-rows: minmax(min-content, max-content) auto minmax(
      min-content,
      max-content
    );
}

.article {
  display: flex;
  flex-direction: column;
}
</style>

<style scoped lang="scss">
/* TemplateArticle */
.article main {
  width: 100%;
}

.loader {
  margin: auto;
}

/* TemplatePage */
.page main {
  /* currently empty */
}

/* error.vue */
.error main {
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 30px;

  max-width: 100%;
}
</style>
