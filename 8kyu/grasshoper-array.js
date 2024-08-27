// Find Mean

// Find the mean (average) of a list of numbers in an array.
// Information

// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16

// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4

// 3. The mean (or average) of this list is 4

//P: integers in array, positive
//R: number that is the average 
//E: [1], 1
//   [1,2,5,7], 4
//P: add all numbers in array then divide them by the number of elements in array


var findAverage = function (nums) {
  return nums.reduce((acc,c) => acc + c )/ nums.length
}



//Codewars
var findAverage = function (nums) {
  // Code here
  var sum = 0;
  for (num in nums) {
    sum += nums[num];
  }
  return sum / (nums.length);
}



//Codewars
var findAverage = function (nums) {
  let res = nums.length;
  let plus = nums.reduce((acc,el)=> {
    return acc+el
  })
  return plus / Math.floor(res)
}