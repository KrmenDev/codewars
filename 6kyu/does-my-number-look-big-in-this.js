// Description:

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.


//number always positive, always valid
//return true or false if is a narcissistic number
//153 => true
//625 => false
//7 => true
//122 => false
//elevate each digit to num digit length if the sum is the same as value return true else false
//add all elevated nums to arr then reduce if the same as val true

function narcissistic(value) {
    let base = String(value).length

    return String(value).split('').map((e) => Math.pow(Number(e), base)).reduce((acc,c) => acc + c) === value ? true : false
}



//Codewars
function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}



//Codewars
function narcissistic(value) {
  return value.toString()
              .split('')
              .map( (x,i,arr) => x ** arr.length)
              .reduce( (a,b)=> +a + +b) 
               === value
}



//Codewars
function narcissistic( value ) {
  // Code me
  var nbDigit = value.toString().length;
  var stringNb = value.toString();
  var num = 0;
  
  for(var i = 0; i < nbDigit ; ++i)
    num += Math.pow(parseInt(stringNb.charAt(i)), nbDigit); 
    
  return num === value;
  
}