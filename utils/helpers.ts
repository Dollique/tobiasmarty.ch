export const isJsonString = (json: string) => {
  try {
    const obj = JSON.parse(json)
    if (obj && typeof obj === 'object') {
      return obj
    }
  } catch (e) {}
  return false
}
