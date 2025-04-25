// Description:

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// number, never empty, floated numbers and negative numbers can be present
//true or false
// 0 => true
// 0.5 => false
// -4 => true
//1  => false
// use modulos if even return true else false



function testEven(n) {
    return n % 2 === 0 ? true : false
}


//Codewars
function testEven(n) {
    return n%2===0;
}


//Codewars
function testEven(n){
    return !(n % 2);
  }


//Codewars
function testEven(n) {
    if ( n % 2 === 0 ){
      return true;
    }
    else return false;
 }