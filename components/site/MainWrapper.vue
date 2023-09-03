<template>
  <div class="site-wrapper" :class="cssClasses">
    <SiteHeader :show-nav="showNav" :nav="headerNav" :name="headerName" />

    <PageLoader v-if="template !== 'error'" class="loader" />
    <main v-if="isClientRendered && template === 'article'">
      <slot />
    </main>
    <main
      v-else-if="
        isClientRendered && (template === 'page' || template === 'error')
      "
    >
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  template: {
    type: String,
    required: true,
  },
  headerName: {
    type: String,
    required: false,
    default: '',
  },
  showNav: {
    type: Boolean,
    required: false,
    default: false,
  },
  headerNav: {
    type: Array as PropType<Object[]>,
    required: false,
    default: () => [],
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
  if (getRoute.constructor === Array) {
    routeClass += getRoute.join('_')
  } else {
    routeClass += getRoute
  }
} else {
  routeClass += 'home'
}

// css classes
const cssClasses = routeClass + ' ' + props.template
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
