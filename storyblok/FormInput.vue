<template>
  <div>
    <label :for="`${blok.name}`">{{ blok.name }}</label>
    <input
      :type="`${blok.type}`"
      :id="`${blok.name}`"
      :name="`${blok.name}`"
      v-model="inputVal"
    />
  </div>
</template>

<script>
const { $formStore } = useNuxtApp() // get the store data

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    value: '',
  },
  data() {
    return {
      inputs2: this.$emit('update:inputs2', this.blok.name),
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
        //return [this.value,this.blok.name];
      },
      set(val) {
        this.$emit('input', val)
        this.$emit('update:inputs2', this.blok.name)

        $formStore.update([this.inputVal, this.blok.name])
      },
    },
  },
}
</script>

<style scoped>
input {
  color: black;
}
</style>
