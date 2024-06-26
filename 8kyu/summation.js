// DESCRIPTION:
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)



//P: a whole number, never empty
//R: the sum of 1 to num
//E: 1 => 1
//E: 2 (1 + 2) => 3 
//E: 3 (1+2+3) => 6
//P: Create an array with the consecutive numbers from 1 to num then sum all numbers and return result

var summation = function (num) {
  arr = Array.from({length:num}, (_,i) => i + 1)
  return arr.reduce((acc, c) => acc + c, 0)
}


var summation = function (num) {
   let total = 0
   for (i = 0; i <= num; i++){
    total += i
   }
    return total
  }

  //CodeWars Best Practice
  const summation = n => n * (n + 1) / 2;

  