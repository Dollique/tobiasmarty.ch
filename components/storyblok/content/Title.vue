<script>
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
      get() {
        if (this.blok.level) {
          return this.blok.level
        }
        return 1
      },
    },
  },
  render() {
    return this.$createElement('h' + this.hlevel, this.myTitle)
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
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
  padding-bottom: $gap;
}
</style>
