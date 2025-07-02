// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1


//number, can be positive or negative, never empty
// reaturn the reverse number
//pass num as string reverse and return as num


function reverseNumber(n) {
  return n < 0 ? -Number(n.toString().split('').reverse().join('').slice(0,-1)) : Number(n.toString().split('').reverse().join(''))
}


//Codewars
function reverseNumber(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}


//Codewars
reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')



//Codewars
function reverseNumber(n) {
  return Math.sign(n) * Math.abs(n)
  	.toString()
  	.split``
    .reverse()
    .join``;
}