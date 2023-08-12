// DESCRIPTION:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
function countBy(x, n) {
    let z = [];
  
    return z;
  }


  //My Solution
  //P: two nums, always two nums, always +, always > 0, whole num
  //R: return an array of n * of x
  function countBy(x, n) {
    let z = [];
    // loop throug n
    for(let i=1; i<=n; i++){
        //multiply loop num * x
        z.push(i*x) //print the resul in new arr
    }
    return z
  }

  //E:
  console.log(countBy(2,5), [2,4,6,8,10])
  console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10])


  //CodeWars
  const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
    //The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
    //     length: n // Create n indexes with undefined values
    //   },
    //   function(v, k) { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to n]
    //     return (k + 1) * x; // Return k(ey) as value for this index
    //   }
    //   );
    //   console.log(countBy(1, 10));

  //CodeWars
  const countBy = (x, n) =>
  [...Array(n)].map((_, indx) => ++indx * x);
  //_ is the element but we are not going to use it so name doesn't matter