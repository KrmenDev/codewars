// Are the numbers in order?

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.


//arr of nums always valid
//return true if all nums are in ascending order else false
//[1,1,2,3,4] => false
//[1,2,3,4] => true
//check if every num in arr is smaller than the next
//sort the arr in asc order if its the same return true


function inAscOrder(arr) {
    return arr.every((_, i) => i === arr.length - 1 || arr[i] < arr[i+1])
}

function inAscOrder(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}

function inAscOrder(arr) {
    let sorted = arr.sort((a,b) => a - b)
    return arr.join('') === sorted.join('')
}


//Codewars
const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');



//Codewars
function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}


//Codewars
function inAscOrder(arr) {
  return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
}


//Codewars
function inAscOrder(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
}