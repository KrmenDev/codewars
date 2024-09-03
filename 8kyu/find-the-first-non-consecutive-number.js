// Description:

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!


// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

//My Solution

//P: Always numbers, always more than 1, never empty, unique numbers, ascending order. positive and negative
//R: The number that is not consecutive
//E:
//// [1,2,3,4,6,7,8] => 6
//// [1,2,3,4] => null
//P: Use a loop and check if current Number is not the same as the previous num if is not return that num else null


function firstNonConsecutive(arr) {
  for(let i = 1; i < arr.length; i ++){
    let firstNumber = arr[i]
    let prevNum = arr[i - 1]
    if(firstNumber !== prevNum + 1){
      return firstNumber
    }
  }
  return null
}



function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }


  //CodeWars
  function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}



function firstNonConsecutive (arr) {
  var temp = arr.filter(function(value,index,self){
      return self[index]!=self[index-1]+1;
  })
  return temp.length > 1 ? temp[1] : null;
}


function firstNonConsecutive (arr) {
  //determine what the difference between numbers that are next to each other equals
    //for numbers to be consecutive, they should be 1 apart from each other
    
    //need a for loop
    //need an if statement: if i doesn't equal + or - 1 return [i]
    //return null if nothing catches in the if statement
    
    for(let i=1; i<arr.length; i++){
      let currentNum= arr[i]
      let numBehind = arr[i - 1]
      if( currentNum !== numBehind + 1){
        return currentNum
      }
    }
    return null
  }