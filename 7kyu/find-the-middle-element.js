// Description:

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


//P:Array with three numbers, can be positive or negative, whole or floating numbers
//R: index of number that lies between the other two elements
//E: [5.9, 10.4, 14.2]v => 1
//   [-2, -3, -1] => 0
// check the highest and lowest number then return the index of the remaining number


function gimme (triplet) {
    let middle = Number(triplet.slice(0,3).sort((a,b) => b - a).slice(1,-1))
    return triplet.indexOf(middle)
}




//codewars
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

//codeWars

var gimme = function (inputArray) {

    let highNum = Math.max(...inputArray)
    let lowNum = Math.min(...inputArray)
    
    return inputArray.findIndex((item)  => {
    
      if (item > lowNum && item < highNum) {
        return item
       }
      })
    
    };



