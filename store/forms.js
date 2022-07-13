export const state = () => ({
  formData: {}
})

export const mutations = {
  update(state, value) {
    console.log("STORE UPDATE STATE", state.formData)

    const key = value[1]
    const val = value[0]
    state.formData[key] = val
  }
}
