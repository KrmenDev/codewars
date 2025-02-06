// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!





// arr integers always positive and negative, never empty, repeated integers
// return the only no matching integer
//[-9,-105,-9,-9,-9,-9,105] => -9
//[1,-1,2,-2,3,3] => 3
//filter only poistive or negative integer
//if num is negative check if there is a positive of same num
//if nor return

function solve(arr){
    return arr.filter((num) => !arr.includes(-num))[0]
};




//Codewars
const solve = a => a.find(e => !a.includes(-e));



//Codewars
function solve(arr) {
    for (var i = 0; i < arr.length; i++)
      if (!arr.includes(-1 * arr[i])) return arr[i];
  }



//Codewars
  function solve(arr){
    return arr.filter(e => !arr.includes(-e))[0]
};