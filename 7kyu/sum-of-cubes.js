// Description:

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


//positive integer, always valid, never zero
// return the sum of its cubed vals
//add n numbers in arr and multiply for itself ***
//then reduce and return res

function sumCubes(n){
  return Array.from({length: n}, (_, i) => i + 1).map((num) => num ** 3).reduce((acc,c) => acc + c, 0)
}


//Codewars
function sumCubes(n){
  if (n == 1) {
    return n**3;
  } else {
    return n**3 + sumCubes(n - 1);
  }
}


//Codewars
function sumCubes(n) {
  return (n * (n + 1) / 2) ** 2;
}


//Codewars
const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);



//Codewars
function sumCubes(n){
  let sum = 0;
  for (let i = 0; i <= n; ++i)
  {
   sum += Math.pow(i, 3);
   }
   return sum;
}