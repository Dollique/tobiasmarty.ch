<template>
  <section v-editable="blok" class="accordion-item">
    <h2 @click="slidetoggle">{{ blok.title }}</h2>
    <div class="accordion-item__content">
      <rich-text-renderer v-if="blok.content" :document="blok.content" />
    </div>
  </section>
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
    // https://stackoverflow.com/questions/44467909/animating-max-height-with-pure-js
    slidetoggle() {
      const item = this.$el
      const el = this.$el.querySelector('.accordion-item__content')
      const ch = el.clientHeight,
        sh = el.scrollHeight,
        isCollapsed = !ch,
        noHeightSet = !el.style.height

      if (isCollapsed || noHeightSet) {
        this.$parent.closeAll() // close all open items

        el.style.height = sh + 'px'
        item.classList.add('active')
      } else {
        el.style.height = 0 + 'px'
        item.classList.remove('active')
      }

      if (noHeightSet) return this.slidetoggle.call(this, false)
    },
    closeItems() {
      const item = this.$el
      const el = this.$el.querySelector('.accordion-item__content')

      el.style.height = 0 + 'px'
      item.classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.accordion-item {
}

h2 {
  border: 1px solid $color-accordion-border;
  border-right: none;
  border-left: none;

  padding: 10px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;

    background: url('~/assets/img/accordion_button.svg') no-repeat center right;
    background-size: 25px 25px;
    width: 25px;
    height: 25px;

    transition: transform 0.25s;

    @include for-tablet-portrait-up {
      background-size: 100% 100%;
      width: 45px;
      height: 45px;
    }
  }
}

.accordion-item__content {
  overflow: hidden;
}

// show & hide animation

.accordion-item__content {
  height: 0;
  opacity: 0;
  transition: height 0.25s, opacity 0.15s ease-in-out;
}

.accordion-item {
  &.active {
    h2 {
      &:after {
        transform: rotate(-180deg);
      }
    }
    .accordion-item__content {
      opacity: 1;
      margin-bottom: 20px;
    }
  }
}
</style>
