// DESCRIPTION:
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)

// Happy coding!


//My Solution

//P: Always integers, never empty, never symbols, never strings
//R: Array of sorted integers no ducplicates
//E: 
//[1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//[1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
//P: concat the two arrays eliminate duplicated nums and sort them 

function mergeArrays(arr1, arr2) {
  let mergedArrays = arr1.concat(arr2)
  return [...new Set(mergedArrays)].sort((a,b) => a - b)
}


function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2).sort((a,b) => a-b)
  return [...new Set(arr3)]
}




//CodeWars
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }




//CodeWars
function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
  }