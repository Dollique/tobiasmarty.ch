<template>
  <MainWrapper name="error" header-name="₮ØƀıȺƨḿȺятɎ.₵ɦ">
    <h1>Error {{ error.statusCode }}</h1>
    <h2>Error Message</h2>
    <div v-if="typeof errorMessage === 'object'">
      <p v-for="(err, index) in errorMessage" :key="err">
        {{ index }}: {{ err }}
      </p>
    </div>
    <div v-else>
      {{ errorMessage }}
    </div>
    <GlobalButton @click="handleError">Back Home</GlobalButton>
    <h2 class="stackToggle" @click="showStack">Toggle Stack</h2>
    <div v-dompurify-html="error.stack" class="stack"></div>
  </MainWrapper>
</template>

<script setup lang="ts">
interface Error {
  statusCode: number
  message: string
  stack: string
}

const props = defineProps({
  error: {
    type: Object as PropType<Error>,
    default: null,
  },
})
const handleError = () => clearError({ redirect: '/' })

const showStack = () => {
  const stack = document.querySelector('.stack') as HTMLElement
  stack.classList.toggle('show')
}

let errorMessage = props.error.message
if (isJsonString(errorMessage)) {
  errorMessage = JSON.parse(errorMessage)
}
</script>

<style scoped lang="scss">
h1,
h2,
p,
button {
  @include addGutter;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
}

.stackToggle {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
.stack {
  display: none;

  max-width: calc(100vw - var(--gutter) * 2);
  overflow: scroll;
  @include addGutter;

  &.show {
    display: block;
  }
}
</style>
