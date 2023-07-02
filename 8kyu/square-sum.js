// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

//My Solution
function squareSum(numbers) {  
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
         let sqrt = numbers[i] * numbers[i];
         total = total + sqrt;
    }
    return total;
 }

 //CodeWars Best Practice
 function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

  //
  function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }