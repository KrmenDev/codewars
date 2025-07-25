// Description:

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

//     a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.
// Examples

// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false

// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.


//number, always valid, always positive, can include 1 and 0
// return boolean if its a power of two
//while n is divisible 2 == 0 divide by 2 until result is 1 and return true else false


function isPowerOfTwo(n){
    if(n == 1){
        return true
    }else if(n == 0){
        return false
    }else{
        while(n % 2 === 0){
        n = n / 2
        }
    }
   return n === 1
}



//Codewars
function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
    
}



//Codewars
function isPowerOfTwo(n){
  if(n == 1)
    return true
  if(n < 1)
    return false

 return isPowerOfTwo(n / 2)

}


//Codewars
function isPowerOfTwo(n) {
  return n === 0 ? false : (n & (n - 1)) == 0
}