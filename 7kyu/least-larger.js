// Task

// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
// Notes

// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.
// Example

// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1



// array of numbers, always valid, never empty
// return the index of smalles number that is larger than element in that index or -1
// [1, 3, 5, 2, 4], 0 => 3
//filter all numbers that are larger than element and sort them
//return the index of the first one


function leastLarger(a,i) {
  let targets = a.filter((num) => num > a[i]).sort((a,b) => a - b)

  return a.indexOf(targets[0])

}



//Codewars
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))



//Codewars
function leastLarger(a, i) {
    const targetVal = a[i]
    const largerVals = a.filter(num => num > targetVal)
    const leastLargeVal = Math.min(...largerVals)
    
    return a.findIndex(num => num === leastLargeVal)
}



//Codewars
const leastLarger = (a, i) =>
  a.indexOf(Math.min(...a.filter(val => val > a[i])));