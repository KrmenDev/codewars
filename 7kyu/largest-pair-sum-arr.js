// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.


//arr of integers, always valid, always at least two nums, can be negative
//return the sum of the two pairs
//[10,14,2,23,19] => 42
//[-100,-29,-24,-19,19] => 0
//sort arr highest and grab two first add them and return


function largestPairSum (numbers) {
  return numbers.sort((a,b) => b - a).slice(0,2).reduce((acc,c) => acc + c, 0)
}



//Codewars
function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}


//Codewars
function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a)
  return a + b
}


//Codewars
const largestPairSum = numbers => numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a + b)