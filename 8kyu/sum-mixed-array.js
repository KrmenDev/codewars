// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//P:array integers and strings, whole numbers and positive, never empty
//R: the sum of all numbers
//E: [9, 3, '7', '3']) => 22
//E: ['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42
//P: turn every string into a number using map then sum all with reduce
function sumMix(x){
  return x.map((e) => Number(e)).reduce((a,b)=>a+b,0)
}


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
  