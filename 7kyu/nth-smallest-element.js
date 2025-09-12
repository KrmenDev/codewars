// Task

// Given an array/list of integers, find the Nth smallest element in the array.
// Notes

//     Array/list size is at least 3.
//     Array/list's numbers could be a mixture of positives , negatives and zeros.
//     Repetition in array/list's numbers could occur, so don't remove duplications.

// Input >> Output Examples

// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 



//Array of nums, can be positive or negative, at least 3 length
//return the smalles pos
// [-5,-1,-6,-18], 4) => -1
//[2,169,13,-5,0,-1], 4) =>  2
//sort arrr lowest to high return the one in position -1


function nthSmallest(arr, pos){
  return arr.sort((a,b) => a - b)[pos - 1]
}


//Codewars
const nthSmallest=(arr, pos)=>arr.sort((a,b)=>a-b)[pos-1];


//Codewars
function nthSmallest(arr, pos){
  let sorted = arr.sort((a,b) => a-b);
  
  return sorted[pos-1];
}


//Codewars
function nthSmallest(arr, pos){
  const a = arr;//Array.from(new Set(arr));
  let n;
  for (let i =0 ; i<pos; i++) {
    n = Math.min(...a)
    a[a.indexOf(n)] = Number.MAX_SAFE_INTEGER;
  }
  return n;
}