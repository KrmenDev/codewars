// Description:

// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

// Notes:

//     The output should be a string.
//     The coefficient and exponent is always a positive integer.

// Examples

//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"


//two arguments, always positive integers, never empty, never string
//return result as a string
//Example

// do the exponent + 1 and add to the end of string
// then divide coefficient by exponent add to beginning


function integrate(coefficient, exponent) {
    let firstOp = exponent + 1;
    let secondOp = coefficient / firstOp;
  return `${secondOp}x^${firstOp}`
}




//Codewars
const integrate = (coefficient, exponent) => {
    return coefficient / (exponent + 1) + 'x^' + (exponent + 1);
  }



//Codewars
const integrate = (coefficient, exponent) => `${coefficient / ++exponent}x^${exponent}`;



//Codewars
function integrate(coefficient, exponent) {
    const a = exponent + 1 ;
    const b = coefficient / a;
    
    return `${b}x^${a}`;
  }