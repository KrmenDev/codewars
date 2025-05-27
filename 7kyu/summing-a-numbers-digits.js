// Description:

// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.


//integer, can be negative or positive, never empty
//return sum of integer
//10 --> 1
//25 => 7
//11 => 2
//separate number into digits, split them 
//change str nums to nums
//filter Not numbers
//use reduce to sum and return

function sumDigits(number) {
    return number.toString().split('').map(Number).filter((char) => !isNaN(char)).reduce((acc,c) => acc + c, 0)
}



//Codewars
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}


//Codewars
function sumDigits(number) {
		var i = 0;
    var sum = 0;
    number = Math.abs(number)
    while(number != 0)
    {
    		sum += number % 10
        number = Math.floor(number/10)
    }
    return sum
}


//Codewars
function sumDigits(number) {
  // Turn number into absolute value -> Stringify number -> Split at each character
  var values = String(Math.abs(number)).split("");
  // Instantiate variable to hold math result
  var product = null;
  // For each value, add the value to the product
  for (var i = 0; i < values.length; i++) {
    product = product + Number(values[i]);
  }
  // Return the product variable
  return product;
}