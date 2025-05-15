// Description:

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//Arr of nums, always positive, never empty from 1 to 0
//return the not repeated num as a num
//[1,1,2] => 2
//[1,2,1] => 2
//[2,1,1] => 2
//loop arr if number is not already present return


function stray(numbers) {
    return parseInt(numbers.filter((num, i) => numbers.indexOf(num) == numbers.lastIndexOf(num)))
}



//Codewars
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}


//Codewars
function stray(numbers) {
  var a = numbers.sort();
  
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
}


//Codewars
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));


//Codewars
function stray(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter(x => x == max).length == 1 ? max : min
}

