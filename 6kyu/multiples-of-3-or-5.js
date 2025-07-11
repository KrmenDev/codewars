// Description:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

//number, always positive?, can include zero
//return the sum of all multiples of 3 or 5 below the number
//10 => 23 (3,5,6,9)
// add all numbers from 1 to number to arr
//filter arr % 3 or % 5 === 0 add to arr
//reduce and return

function solution(number){
  return number <= 0 ? 0 : Array.from({length:number}, (_,i )=> i + 1).filter((num) => num % 3 === 0 || num % 5 === 0).reduce((acc,c) => acc + c, 0)
}




//Codewars
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}


//Codewars
function solution(number){
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}


//codewars
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}