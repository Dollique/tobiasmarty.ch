<template>
  <nav :class="{ hidden: !$navigationStore.navOpen }">
    <template v-if="blok">
      <template v-for="myblok in blok.globals">
        <div
          v-if="myblok.component === 'global_reference'"
          :key="myblok._uid"
          v-html="getNavigation(myblok.reference.content.Header_Navigation)"
        ></div>
      </template>
    </template>
  </nav>
</template>

<script setup lang="ts">
const { $navigationStore } = useNuxtApp() // get the store data
const router = useRouter()

defineProps<{
  blok: {
    type: Object
    required: false
    default: () => undefined
  }
}>()

onMounted(() => {
  if (router) {
    addListeners()
  }
})

onBeforeUnmount(() => {
  if (router) {
    removeListeners()
  }
})

onUpdated(() => {
  if (router) {
    removeListeners()
    nextTick(() => {
      addListeners()
    })
  }
})

const getNavigation = function (nav) {
  let result

  result = '<ul>'
  for (const key in nav) {
    if (Object.prototype.hasOwnProperty.call(nav, key)) {
      result +=
        '<li><a href="/' +
        nav[key].Header_Link.cached_url +
        '">' +
        nav[key].display_name +
        '</a>'

      const myObject = nav[key]
      if (myObject.Sub_Category.length !== 0) {
        result += getNavigation(myObject.Sub_Category)
      }

      result += '</li>'
    }
  }
  result += '</ul>'

  return result
}

let links = []
const linksRef = ref(null)

/**
 * Prevents default browser behavior (page reload) for relative links.
 * https://github.com/d-darwin/darwin-vue-ui/blob/main/src/mixins/linkClickRouting.js
 */
const navigate = function (event) {
  const href = event.target.getAttribute('href')
  const target = event.target.getAttribute('target')
  // TODO: add if it is the same domain check
  if (href && href[0] === '/' && target !== '_blank') {
    event.preventDefault()
    router && router.push(href)
  }
}

const addListeners = function () {
  if (linksRef.value) {
    const element = linksRef.value as HTMLElement
    const links = element.querySelectorAll('a')
    const linksArray = Array.from(links)

    for (let i = 0; i < linksArray.length; i++) {
      links[i].addEventListener('click', navigate, false)
    }
  }
}

const removeListeners = function () {
  for (let i = 0; i < links.length; i++) {
    links[i].removeEventListener('click', navigate, false)
  }
  links = []
}
</script>

<style lang="scss" scoped>
nav ::v-deep {
  // grid-row: 2;
  // grid-column: 1 / span 2;
  align-self: flex-start;

  height: calc(
    100vh - 100px
  ); // TODO -> 100px Header is min-height (can change!)
  overflow-y: auto;

  @include for-tablet-landscape-up {
    margin-top: 1.5rem;
  }

  a {
    display: block;
    border-top: 1px $color-content solid;
    @include fontSize(1rem, 2.5vw);

    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 0;

    &:hover {
      background-color: $color-hover;
    }
  }

  ul {
    list-style: none;
    margin: 0 $gutter;
    padding: 0;

    li {
      &:first-child a {
        border-top: none;
      }
      &:last-child a {
        border-bottom: 1px $color-content solid;
      }
    }

    ul {
      margin-left: 20px;
      padding-bottom: 15px;

      a {
        @include fontSize(0.7rem, 1.5vw);
        border-top: none;
      }

      li:last-child a {
        border-bottom: none;
      }
    }
  }

  li {
  }
}
</style>