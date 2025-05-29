// Description:

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?



// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.


//integer, positive or negative, can be 0
//return the the next multiple of 5 of num
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// divide n / 5
//ceil result and * 5

function roundToNext5(n){
  return Math.ceil(n / 5) * 5
}



//Codewars
function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}



//Codewars
const roundToNext5 = n => Math.ceil(n / 5) * 5;



//Codewars
function roundToNext5(n){
  while(n%5) n++;
  return n;
}
