// Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

//arr of integers, alway positive, can be duplicates
//return the smallest num with no duplicates
// Examples

// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

//eliminate duplicates
//return them 


function minValue(values){
    return Number([...new Set(values)].sort().join(''))
}



//Codewars
function minValue(values){
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}



//Codewars
function minValue(values){
  return Number(Array.from(new Set(values)).sort().join(''))
}



//Codewars
function minValue(values){
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join('');
  return Number(n);
}



//Codewars
const minValue = (v) => +[...new Set(v)].sort().join``