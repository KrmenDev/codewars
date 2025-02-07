// Description:

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


//array nums, positive, negative, can be empty
// return the highest n nums from arr
// 0, [1, 2, 3, 4, 8, 7, 6, 5] => []
// 2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] => [9, 10]
// find the highest return only n number

function largest(n, array) {
    return array.sort((a,b) => b - a).slice(0, n).reverse();
  }



//Codewars
  function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
  }



//Codewars
function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
  }


  
//Codewars
const largest = function(n,xs){
    return n === 0 ? [] : xs.sort((a, b)=> a - b).slice(-n)
  }