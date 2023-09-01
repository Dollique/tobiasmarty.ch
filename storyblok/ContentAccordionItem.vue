<template>
  <section ref="accordionItem" v-editable="blok" class="accordion-item">
    <h2 @click="slidetoggle">{{ blok.title }}</h2>
    <div class="accordion-item__content">
      <div v-dompurify-html="renderedRichText"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContentAccordionItemStoryblok } from '@/types/component-types-sb'

const props = defineProps({
  blok: {
    type: Object as PropType<ContentAccordionItemStoryblok>,
    required: true,
  },
})

const emit = defineEmits(['closeAll'])

const renderedRichText = computed(() => renderRichText(props.blok.content))
const accordionItem: { value: HTMLElement | null } = ref(null)

// https://stackoverflow.com/questions/44467909/animating-max-height-with-pure-js
const slidetoggle = function (): void {
  if (accordionItem.value) {
    const el = accordionItem.value.querySelector(
      '.accordion-item__content',
    ) as HTMLElement
    const ch = el.clientHeight
    const sh = el.scrollHeight
    const isCollapsed = !ch
    const noHeightSet = !el.style.height

    if (isCollapsed || noHeightSet) {
      emit('closeAll') // close all open items

      el.style.height = sh + 'px'
      accordionItem.value.classList.add('active')
    } else {
      el.style.height = 0 + 'px'
      accordionItem.value.classList.remove('active')
    }

    if (noHeightSet) return slidetoggle.call(accordionItem)
  }
}

const closeItem = function () {
  if (accordionItem.value) {
    const el = accordionItem.value.querySelector(
      '.accordion-item__content',
    ) as HTMLElement

    el.style.height = 0 + 'px'
    accordionItem.value.classList.remove('active')
  }
}

defineExpose({
  accordionItem,
  closeItem,
})
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/headers.scss';

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
  // overflow: hidden; // not sure why this was needed -> removed because it causes an issue with .link in the richtext

  :deep(p) {
    @include addGutter;
    padding-bottom: var(--p-margin);

    &:last-child {
      padding-bottom: 0;
    }

    a {
      @extend .link;
    }
  }

  :deep(ul) {
    li {
      p {
        margin-left: 0;
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
