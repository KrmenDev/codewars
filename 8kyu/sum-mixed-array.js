// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x){

}

//My Solution
function sumMix(x){
    return x.map(Number).reduce((c,a) => c + a, 0)
}



//CodeWars Best practice
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }


  //CodeWars
  function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }
  