// Description:
// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example

// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


//array of nums, never empty, can be negative, already sorted ascending
//new array of consecutive nums from min to max val
//[6,9] => [6,7,8,9]
//[-1,4] => [-1,0,1,2,3,4]
//[1,2,3] => [1,2,3]
//use map to add 1 to each num from 0 to last index


function pipeFix(numbers){
    let minNum = numbers[0]
    let maxNum = numbers[numbers.length -1]

    let consecutiveNums = []
    for(let i = minNum; i <= maxNum; i++){
        consecutiveNums.push(i)
    }
    return consecutiveNums
    
}


//Codewars
function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
  }


//Codewars
let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);