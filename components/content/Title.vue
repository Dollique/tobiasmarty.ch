<template>
  <h1>{{ myTitle }}</h1>
  <!--div ref="replace"></div-->
</template>

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
    /*enderTitle: {
      get() {
        const ele = this.$createElement('h' + this.hlevel)
        ele.text = this.myTitle

        return ele
      },
    },*/
  },
  render() {
    /*const ele = this.$createElement('h' + this.hlevel)
    ele.text = this.myTitle

    return ele*/
  },
  mounted() {
    const ele = this.$createElement('h' + this.hlevel)
    ele.text = this.myTitle
    //console.log('ELEE', ele)
    //console.log('REF', this.$refs.replace)
    this.$refs.replace = ele
  },
}
</script>

<style lang="scss" scoped>
h1 {
}
</style>
