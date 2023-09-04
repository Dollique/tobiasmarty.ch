<template>
  <MainWrapper
    :template="name"
    :header-name="headerName"
    :show-nav="blok.showNav"
    :header-nav="headerNav"
  >
    <template v-if="name === 'page'">
      <StoryblokComponent
        v-for="blokChild in blok.body"
        :key="blokChild._uid"
        :blok="blokChild"
      />
    </template>
    <template v-else>
      <Waypoint
        v-for="childblok in blok.body"
        :key="childblok._uid"
        :options="options"
      >
        <StoryblokComponent :blok="childblok" />
      </Waypoint>
    </template>
  </MainWrapper>
</template>

<script setup lang="ts">
import { Waypoint } from 'vue-waypoint'
import { HeaderNav } from '@/types/global'

import type {
  TemplatesPageStoryblok,
  TemplatesArticleStoryblok,
} from '@/types/component-types-sb'

const props = defineProps({
  blok: {
    type: Object as PropType<
      TemplatesPageStoryblok | TemplatesArticleStoryblok
    >,
    required: true,
  },
  meta: {
    type: Object as PropType<SBMetaData>,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

// get storyblok globals

let headerName = ''
let headerNav = {} as HeaderNav
if (props.blok.globals) {
  for (const sbGlobals of props.blok.globals) {
    if (sbGlobals.component === 'global_reference') {
      headerName = sbGlobals.reference.content.site_title
      headerNav = {
        navigationArray: sbGlobals.reference.content.Header_Navigation,
        nameSchema: 'display_name',
        linkSchema: 'Header_Link.cached_url',
        subcategoriesSchema: 'Sub_Category',
      }
    }
  }
}

let siteTitle = headerName
if (props.meta.title !== '') {
  siteTitle = props.meta.title + ' | ' + headerName
}

useHead({
  title: siteTitle,
})

// Waypoint options

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -100px 0px', // 0px 0px -100px 0px
  threshold: [0, 0.75], // script is executed at 0% and 75% visibility
}

// if I want to use onChange add @change="onChange" to <Waypoint> and import WaypointState
/* const onChange = (waypointState: WaypointState) => {
  const direction = waypointState.direction
  const going = waypointState.going

  console.log('direction: ' + direction)
  console.log('going', going)
} */
</script>
