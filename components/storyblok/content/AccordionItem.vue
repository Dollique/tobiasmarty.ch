<template>
  <section v-editable="blok" class="accordion-item">
    <h2 @click="slidetoggle">{{ blok.title }}</h2>
    <div class="accordion-item__content">
      <rich-text-renderer v-if="blok.content" :document="blok.content" />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: {
    type: Object
    required: true
  }
}>()

// https://stackoverflow.com/questions/44467909/animating-max-height-with-pure-js
const slidetoggle = function () {
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
}
const closeItems = function () {
  const item = this.$el
  const el = this.$el.querySelector('.accordion-item__content')

  el.style.height = 0 + 'px'
  item.classList.remove('active')
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

.accordion-item {
}

h2 {
  @include addGutter;

  border: 1px solid $color-accordion-border;
  border-right: none;
  border-left: none;

  margin-bottom: 14px;
  padding: 10px 30px 10px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  cursor: pointer;

  transition: all 0.25s ease-in-out;

  @include for-tablet-portrait-up {
    &:hover {
      background-color: $color-swiper-border;
      color: $color-background;

      padding-left: 20px;

      &:after {
        background-image: url('~/assets/img/accordion_button_neg.svg');
        padding-right: 20px;
      }
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;

    background: url('~/assets/img/accordion_button.svg') no-repeat center right;
    background-size: 25px 25px;
    width: 25px;
    height: 25px;

    transition: all 0.25s;

    @include for-tablet-portrait-up {
      background-size: 100% 100%;
      width: 45px;
      height: 45px;
    }
  }
}

.accordion-item__content {
  overflow: hidden;

  ::v-deep {
    p {
      padding-bottom: 3px;
    }

    ul {
      li {
        p {
          margin-left: 0;
        }
      }
    }
  }
}

// show & hide animation

.accordion-item__content {
  height: 0;
  opacity: 0;
  transition:
    height 0.25s,
    opacity 0.15s ease-in-out;
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

@media print {
  .accordion-item {
    h2 {
      &:after {
        display: none;
      }
    }
  }
  .accordion-item__content {
    height: 100% !important;
    opacity: 1 !important;
    margin-bottom: 20px;
  }
}
</style>
