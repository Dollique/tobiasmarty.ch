<template>
  <div class="accordeon_item">
    <h2 @click="toggleAccItem">{{ blok.title }}</h2>
    <div class="accordeon-item__content">
      <rich-text-renderer v-if="blok.content" :document="blok.content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleAccItem() {
      const accContent = this.$el.querySelector('.accordeon-item__content');

      if(!this.$el.classList.contains('accOpen')) {
        accContent.style.transform = 'scale(1)';
        accContent.style.height = '100%';
        this.$el.classList.add('accOpen');
      } else {
        accContent.style.transform = 'scale(0)';
        accContent.style.height = '0';
        this.$el.classList.remove('accOpen');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.accordeon_item {

}

h2 {
  border: 1px black solid;
  border-right: none; border-left: none;
}

.accordeon-item__content {
  transform: scale(0) translateZ(0);
  transform-origin: top left;
  height: 0;

  transition: all 0.25s ease-in-out;
}
</style>
