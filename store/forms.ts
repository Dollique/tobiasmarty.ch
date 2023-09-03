import { defineStore } from 'pinia'

/* eslint-disable no-console */

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {},
  }),
  /* actions: {
    update(value) {
      console.log('STORE UPDATE STATE', this.formData)

      const key = value[1]
      const val = value[0]
      this.formData[key] = val
    },
  }, */
})

/* eslint-enable no-console */
