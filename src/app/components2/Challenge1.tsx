// Setup a function similar to following:

/**
createArray<string>(3, 'hi') // ['hi','hi','hi']
createArray<number>(4, 10) // [10,10,10,10]
 */

function createArray<T>(total: number, message: T): Array<T> {
  const arr = Array(total).fill(message)
  return arr
}

const arr1 = createArray<string>(3, 'hi')
const arr2 = createArray<number>(4, 10)

console.log(arr1)
console.log(arr2)

/** Other way for the same above Generic with Array<T> */
function createArray2<T>(total: number, message: T): Array<T> {
  const arr = Array(total).fill(message)
  return arr
}

const arr3 = createArray2<string>(6, 'hello')
const arr4 = createArray2<number>(7, 78)

console.log(arr3)
console.log(arr4)
