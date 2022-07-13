<template>
  <h1 v-editable="blok">{{ myTitle }}</h1>
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
    if (this.blok && Object.keys(this.blok).length === 0 && Object.getPrototypeOf(this.blok) === Object.prototype) {
      // used in rich-text
      getTitle = this.body.name
    } else {
      // used normally
      getTitle = this.blok.name
    }

    return {
      myTitle: getTitle
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
}
</style>
