// Big O Notation lecture
let small = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let medium = []
for(let i = 1; i < 101; i++){
  medium.push(i)
}

let large = []
for( let i = 1; i < 1001; i++){
  large.push(i)
}

// O(1) - Constant Complexity
//Regardless of the input increase, there will always be just one operation.
function constant(arr, i){
  let count = 0
  let x = arr[i]
  count++
  return count
}
// O(n) - Linear Complexity 
// Operations are directly proportional to the amount of inputs
function linear(arr, val) {
  let count = 0
  for(let i = 0; i < arr.length; i++){
    count++
    if(arr[i] === val){
      return count
    }
  }
  return count
}
// O(log n) - Logarithmic Complexity
// Log is the inverse of exponent
// This one is really good.
// It will only increase when input size increases.
function logarithmic(arr, val){
  let count = 0
  let low = 0
  let high = arr.length - 1
  while( low <= high) {
    count++
    let mid = parseInt((low + high) / 2)
    let current = arr[mid]
    if(current < val){
      low = mid + 1
    } else if ( current > val ){
      high = mid - 1
    } else {
      return count
    }
  }
  return count
}
// O(n^2) - Quadratic Complexity
function quadratic(arr){
  let count = 0
  for(let i = 0; i < arr.length;i++){
    count++
    for (let j = 1; j < arr.length; j++){
      count++
    }
  }
  return count
}

