// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//My Solution:

//P: Always a number, whole number, floated num?, symbols?, empty?, strings?
//R: Number of digits
//E:
//// 5 => 1
//// 12345 => 5
//// 9876543210 => 10
//P: pass the n to string
//// then return length

function digits(n) {
    return n.toString().length
  }



//CodeWars
function digits(n) {
    return String(n).length
  }



//Codewars
function digits(n) {
    return `${n}`.length;
  }