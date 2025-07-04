// Description:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//Arr of numbers, positive, and negative, repeated
//return the odd repeated num in array js
//[7] => 7
//[1,1,2] => 2
//[1,1,2,-2,5,2,4,4,-1,-2,5] => -1)
//return the unique integer
//sum how many times it repeats if odd return


function findOdd(A) {
    const counts = {}

    for(const num of A){
        if(counts[num]){
            counts[num]++
        }else{
            counts[num] = 1
        }
    }

    for(const key in counts){
        if(counts[key] % 2 !== 0){
            return Number(key)
        }
    }
}



//Codewars
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);



//Codewars
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}



//Codewars
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

