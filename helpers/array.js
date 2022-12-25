export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export const chunk = (arr, size = 1) => {
  const chunkedArray = []
  for (let i = 0; i < arr.length; i++) {
    const last = chunkedArray[chunkedArray.length - 1]
    if (!last || last.length === size) {
      chunkedArray.push([arr[i]])
    } else {
      last.push(arr[i])
    }
  }
  return chunkedArray
}
