<template>
  <form class="form-section" @submit.prevent="handleFormSubmit">
    <fieldset v-for="(blok, index) in blok.fields" :key="blok._uid">
        <!--component :is="blok.component" :blok="blok" :inputs.sync="inputs[index]" v-model="inputs" /-->
        <component :is="blok.component" :blok="blok" :inputs.sync="inputs2[index]" v-model="inputs[index]" />
    </fieldset>

    <fieldset>
      <button type="submit" class="form__button">Submit</button>
    </fieldset>
  </form>
</template>

<script>
  export default {
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
    data(){
      return {
        inputs : [], // add form fields from child component
        inputs2 : []
      }
    },
    methods: {
      handleFormSubmit() {
        var formApiEndpoint = 'http://geyst.appengine.flow.ch:8080'

        console.log("test", this.inputs);
        console.log("test 2", this.inputs2);
        console.log("test VUEX", this.$store.state.forms.formData);

        var formRequest = new Request(formApiEndpoint, {
          method: 'POST',
          body: JSON.stringify({
            name: this.inputs["firstname"],
            message: this.inputs["mail"]
          })
        })

        fetch(formRequest)
          .then(function(response) {
            if (response.status === 200) {
              console.log("it worked aaa");
              return response.json()
            } else {
              throw new Error('Something went wrong on api server!')
            }
          })
          .then(function(response) {
            successEl.style.display = 'block'
            buttonEl.style.display = 'block'
            sendingEl.style.display = 'none'
            nameInput.value = ''
            messageInput.value = ''
          }).catch(function(error) {
          errorsEl.style.display = 'block'
          buttonEl.style.display = 'block'
          sendingEl.style.display = 'none'
          console.error(error)
        })
      }
    },
    mounted() {
      console.log("MOUNTED", this.inputs);
    }
  }

</script>
