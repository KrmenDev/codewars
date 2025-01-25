// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.


//arr numbers, positive and negative
// return length number of even numbers
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
// reverse arr filter even nums return only the number length


function evenNumbers(array, number) {
    return array.reverse().filter((num) => num % 2 === 0).reverse().slice(-number)
  }



function evenNumbers(array, number) {
    return array.filter((num) => num % 2 === 0).slice(-number)
  }




//Codewars
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);



//Codewars
const isEven = n => n % 2 === 0;
const evenNumbers = (a, n) => a.filter(isEven).slice(-n);



//Codewars
function evenNumbers(array, number) {
    let arr = [];
    for (let i=array.length-1;number>0;i--){
      if (array[i] % 2 == 0) {
        arr.push(array[i]);
        number--;
      }
    }
return arr.reverse();
}