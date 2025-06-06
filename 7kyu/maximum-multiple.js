// Task

// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :

//     N is divisible by divisor

//     N is less than or equal to bound

//     N is greater than 0.

// Notes

//     The parameters (divisor, bound) passed to the function are only positive values .
//     It's guaranteed that a divisor is Found .

// Input >> Output Examples

// divisor = 2, bound = 7 ==> return (6)

// Explanation:

// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// divisor = 10, bound = 50 ==> return (50)

// Explanation:

// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

// divisor = 37, bound = 200 ==> return (185)

// Explanation:

// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .


//two integers, always positive, always > 0
//return the number that is divisible by divisor and less or equal to bound
//2,7 => 6
//3,10 => 9
//10, 50 => 50

//check if bound is divisible by divisor if so return else substract one until is divisible

function maxMultiple(divisor, bound){
    while(bound % divisor != 0){
        bound -= 1
    }
    return bound
}



//Codewars
function maxMultiple(divisor, bound){
  return bound-bound%divisor
}



//Codewars
const maxMultiple = (divisor,bound) => bound - bound % divisor ;




//Codewars
function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}




//Codewars
function maxMultiple(divisor, bound) {
  while (bound % divisor) {
    bound--;
  }
  
  return bound;
}