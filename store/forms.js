import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {},
  }),
  actions: {
    update(value) {
      console.log('STORE UPDATE STATE', this.formData)

      const key = value[1]
      const val = value[0]
      this.formData[key] = val
    },
  },
})
