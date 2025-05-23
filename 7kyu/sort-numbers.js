// Description:

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//arr of nums, can be empty or null
//return arr sorted ascending
//[1,2,3,10,5] => [1,2,3,5,10]
//null => []
//[] => []
//use sort to sort arr


function solution(nums){
    return nums == null || nums == [] ? []: nums.sort((a,b) => a - b)
}


//Codewars
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}


//Codewars
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}


//Codewars
function solution(nums){
  return nums ? nums.sort(function(a, b) { return a - b;}) : [];
}