// Definition

// An element is leader if it is greater than The Sum all the elements to its right side.
// Task

// Given an array/list [] of integers , Find all the LEADERS in the array.
// Notes

//     Array/list size is at least 3 .

//     Array/list's numbers Will be mixture of positives , negatives and zeros

//     Repetition of numbers in the array/list could occur.

//     Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples

// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

// Explanation:

//     4 is greater than the sum all the elements to its right side

//     Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

// Explanation:

//     17 is greater than the sum all the elements to its right side

//     5 is greater than the sum all the elements to its right side

//     Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}

// Explanation:

//     5 is greater than the sum all the elements to its right side

//     2 is greater than the sum all the elements to its right side

//     Note : The last element -1 is less than the sum of its right elements (abstract zero).

// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

// Explanation:

//     0 is greater than the sum all the elements to its right side

//     -1 is greater than the sum all the elements to its right side

//     3 is greater than the sum all the elements to its right side

//     Note : The last element 2 is greater than the sum of its right elements (abstract zero). 


//arr of nums can be positive and negative, at least 3 elements always
//return the highest num or nums that the sum of all nums to its right
//[-1,-29,-26,-2] => [-1]
//[5,-2,2] => [5,2]
//[1,2,3,4,0] => [4]
//find the highest num and create var to grab nums to its right and sum them all
//if num is highest return , check next highest
//use a loop


//loop num and grab all elements to its right (slice)
//sum them all if num is higher than sum push num to arr

function arrayLeaders(numbers){

  let res = []

  for(let i = 0; i < numbers.length; i++){

    let sum = numbers.slice(i+1).reduce((acc,c) => acc+c, 0)

      if(numbers[i] > sum){
        res.push(numbers[i])
      }
  }
  return res
}



//Codewars
var arrayLeaders = numbers => {
  let answer = [];

  for (let i=0; i<numbers.length; i++){          //loop through array
    let sum = 0;
    for (let j=i+1; j<numbers.length; j++){      //start one position right of the main loop element
      sum += numbers[j];                         //add all those numbers together
    }
    
    if(numbers[i] > sum){                        //compare that sum to the initial number
      answer.push(numbers[i]);                   //if it's bigger push it to the answer array
    }
  }
  return answer;                                 //return it like it's defective
}


//Codewars
var arrayLeaders = numbers => {
return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}



//Codewars
const arrayLeaders = (numbers, arr = []) => {

  for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > numbers.slice(i+1).reduce((a,b)=> a+b, 0)){
      arr.push(numbers[i])
    }
  }
  return arr
}


console.log(arrayLeaders([1,2,3,4,0]), [4])