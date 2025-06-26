// Description:

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

//ages, all numbers, always valid, always positive
//return number with result
//add all nums to arr
//multiply each by itself
//add them all
//square root result and divide by two


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
  let sum = arr.map((age) => age * age).reduce((acc,c) => acc + c, 0)

  return Math.floor(Math.sqrt(sum) / 2)

}


//Codewars
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}


//Codewars
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;


//Codewars
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let sum = [...arguments]
    .map(x=>x**2)
    .reduce((sum,v)=>sum+v,0)
  return Math.floor( Math.sqrt(sum)/2 )
}