// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

//     lst contains integers, that means it may contain some negative numbers
//     if lst is empty or contains a single element, return 0
//     lst is not sorted

// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

// Have fun!

//array, numbers, can be positive and negative, can be empty
//the difference between largest and smallest
//[16] => 0
//[0, 1, 2, 3, 4, 5, 6] => 6
//[-0, 1, 2, -3, 4, 5, -6] => 11
//sort arr small to high
// get first and last num
// substract and return 


  function maxDiff(list) {
    return list.length <= 1 ? 0 : Math.abs(Math.max(...list) - Math.min(...list))
  };



//Codewars
function maxDiff(list) {
    if(!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
  };



//Codewars
function maxDiff(list) {
    return list.length ? Math.max(...list) - Math.min(...list) : 0;
  };


//Codewars
const maxDiff = (arr) => arr.sort((a,b)=>a-b)[arr.length-1] - arr[0]  || 0
