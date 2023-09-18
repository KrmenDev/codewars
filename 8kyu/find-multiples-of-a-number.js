// Description:

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


//My Solution

//P: num, whole, never empty, never not a num
//R: Array of multiples from integer to limit
//E: (5, 25) => [5, 10, 15, 20, 25]
//E: (5, 7) => [5]
//E: (11, 54) => [11, 22, 33, 44]
//P: Multiply integer starting from 1 to the num that doesnt past the limit
// push those integers to new array
// return array


  function findMultiples(integer, limit) {
    let multiples = []
        for(let i = 1; i <= limit; i++){
            if(integer * i <= limit){
                multiples.push(i*integer)
            }
        }
    return multiples
  }


//CodeWars
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }


//CodeWars
function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
  }