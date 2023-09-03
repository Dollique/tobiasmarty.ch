/**
 * checks if a string is a valid JSON object
 * @param json A string that may or may not be a JSON object
 * @returns false if the string is not a JSON object, otherwise returns the parsed JSON object
 */
export const isJsonString = (json: string) => {
  try {
    const obj = JSON.parse(json)
    if (obj && typeof obj === 'object') {
      return obj
    }
  } catch (e) {}
  return false
}

/** GET PROPERTY **/

// the function getProperty() is used to to create a property lookup for an object
// object   -> your object (it can include arrays as well)
// property -> the property you want to reference to (as a string)

// example object: myObj; property: 'categories[0].product_name'
// this will return myObj.categories[0].product_name
export const getProperty = (object: any, property: string) => {
  if (!object) return undefined

  // get all properties and save it in an array (turns [0] to its own property '0')
  const properties = property.split(/\.|\[(\d+)\]/).filter(Boolean)
  let result = object

  for (const prop of properties) {
    if (Array.isArray(result) && /^\d+$/.test(prop)) {
      // 1. check if result is an Array 2. check if prop is a number
      // Handle exception for Array lookups (example: [0])
      const index = parseInt(prop, 10) // parse prop to number using 10=decimal
      if (index >= 0 && index < result.length) {
        // make sure it's a real number
        // do a lookup and overwrite current lookup variable
        result = result[index]
      } else {
        result = undefined
        break
      }
    } else {
      // do a lookup for the current result and overwrite result variable
      result = result[prop]
    }

    if (result === undefined) break
  }

  return result
}
