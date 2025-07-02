// Description:

// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *

// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0


//integer, can be positve and negative, can include zero
//return the number of 'stars' in the n row
//if negative or zero return 0


// Return the nth triangular number
function triangular( n ) {
    return n <= 0 ? 0 : n * (n+1) / 2
}



//Codewars
// Return the nth triangular number
function triangular( n ) {
  return n > 0 ? n * (n + 1) / 2 : 0;
}


//Codewars
// Return the nth triangular number
var max_n = Math.floor(Math.sqrt(Number.MAX_VALUE));

function triangular(n) {
  if (n < 1 || n >= max_n) return 0;
  
  return (n * (n + 1)) / 2;
}



//Codewars
// Return the nth triangular number
function triangular( n ) {
  return n < 0 ? 0 : n * (n + 1) / 2;
}