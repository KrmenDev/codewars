// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


//array of numbers, never empty, always positive
// return even numbers using filter
//[1,2,3,6,8,10] => [2,6,8,10]
//[1,2] => [2]
//[12,14,15] => [12,14]
//[1,3,9] => []



function getEvenNumbers(numbersArray){
    return numbersArray.filter((num) => num % 2 === 0)
  }



//Codewars
function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(n){
      return n % 2 == 0;
    });
  }


//Codewars
function isEven(num){
    return num%2==0
  }
  
  function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    var filtered = numbersArray.filter(isEven);
    return filtered;
  }