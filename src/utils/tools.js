export function cloneArray(array) {
  let newArray = []
  if (array instanceof Array) {
    for (let item of array) {
      let obj = {}
      let keys = Object.keys(item)
      let value = Object.values(item)
      for (let index in keys) {
        obj[keys[index]] = value[index]
      }
      newArray.push(obj)
    }
  }
  return newArray
}