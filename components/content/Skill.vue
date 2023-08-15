<template>
  <div v-editable="blok" class="skill">
    <div class="skill_name">{{ blok.name }}</div>
    <div class="skill_score" :data-level="blok.level"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
    default() {
      return {}
    },
    required: false,
  },
})
</script>

<style lang="scss" scoped>
.skill {
  padding-bottom: 20px;
  @include addGutter();
}

.skill_score {
  height: 5px;
  color: $color-black;
  margin-top: 5px;

  &[data-level='4'] {
    width: 100%;
    background-color: $color-skill1;
  }
  &[data-level='3'] {
    width: 75%;
    background-color: $color-skill2;
  }
  &[data-level='2'] {
    width: 50%;
    background-color: $color-skill3;
  }
  &[data-level='1'] {
    width: 25%;
    background-color: $color-skill4;
  }
}
</style>
