// Objective

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3


//My Solution


//P: two array integers. always >=1, whole nums, positives
//R: Boolean 
//E: [4,5,6],[1,2,3]), true
//E: [5,6,7],[4,5,6]), false
//P: multiply each num in array 'a' by 2 and sum them
//P: multiply each num in array 'b' by 3 and sum them
//P: if sum in a > b return true

function arrayMadness(a, b) {
    let sumA = a.map((number)=> number*number).reduce((acc,c)=> acc+c)
    let sumB = b.map((number)=> number*number*number).reduce((acc,c)=> acc+c)
    return sumA > sumB ? true : false
  }




//CodeWars
  const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0)

  //** = Math.pow()



//CodeWars
  function arrayMadness(a, b) {
    return a.reduce( (sum, el) => sum + el ** 2, 0) >
           b.reduce( (sum, el) => sum + el ** 3, 0);
  }