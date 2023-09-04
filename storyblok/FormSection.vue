<template>
  <form class="form-section" @submit.prevent="handleFormSubmit">
    <fieldset v-for="(blokField, index) in blok.fields" :key="blokField._uid">
      <StoryblokComponent
        v-for="blokChild in blokField.component"
        :key="blokChild._uid"
        v-model="inputs[index]"
        :blok="blokChild"
      />
    </fieldset>

    <fieldset>
      <button type="submit" class="form__button">Submit</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
// import { useFormStore } from '~/store/forms'
// const formStore = useFormStore() // get the store data

// TODO: remove eslint disable when done
/* eslint-disable no-console */

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputs: [], // add form fields from child component
      inputs2: [],
    }
  },
  mounted() {
    console.log('MOUNTED', this.inputs)
  },
  methods: {
    handleFormSubmit() {
      /* const formApiEndpoint = 'http://geyst.appengine.flow.ch:8080'

      console.log('test', this.inputs)
      console.log('test 2', this.inputs2)
      console.log('test STORE', formStore.formData)

      const formRequest = new Request(formApiEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          name: this.inputs.firstname,
          message: this.inputs.mail,
        }),
      })

      fetch(formRequest)
        .then(function (response) {
          if (response.status === 200) {
            console.log('it worked aaa')
            return response.json()
          } else {
            throw new Error('Something went wrong on api server!')
          }
        })
        .then(function (response) {
          console.log('it worked', response)

          successEl.style.display = 'block'
          buttonEl.style.display = 'block'
          sendingEl.style.display = 'none'
          nameInput.value = ''
          messageInput.value = ''
        })
        .catch(function (error) {
          errorsEl.style.display = 'block'
          buttonEl.style.display = 'block'
          sendingEl.style.display = 'none'
          console.error(error)
        }) */
    },
  },
}
/* eslint-enable no-console */
</script>
