<script lang="ts">
export default {
  props: {
    blok: {
      type: Object,
      default() {
        return {}
      },
      required: false,
    },
    // when the component is used in rich-text I need the body property
    body: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },
  data() {
    let getTitle
    if (
      this.blok &&
      Object.keys(this.blok).length === 0 &&
      Object.getPrototypeOf(this.blok) === Object.prototype
    ) {
      // used in rich-text
      getTitle = this.body.name
    } else {
      // used normally
      getTitle = this.blok.name
    }

    return {
      myTitle: getTitle,
    }
  },
  computed: {
    hlevel: {
      get(): number {
        if (this.blok.level) {
          return this.blok.level
        }
        return 1
      },
      set() {
        // Dummy setter function that does nothing
      },
    },
  },
  render() {
    // h() is a helper function for creating elements -> https://vuejs.org/guide/extras/render-function.html
    return h('h' + this.hlevel, this.myTitle)
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

h1,
h2,
h3,
h4,
h5,
h6 {
  @include addGutter;
}

h1,
h2 {
  padding-bottom: var(--title-gap);
}
</style>
