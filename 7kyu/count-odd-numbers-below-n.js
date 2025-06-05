// Description:

// Given a number n, return the number of positive odd numbers below n, EASY!

// Expect large Inputs!

//integer, always positive, never empty, never zero
//return the number of odd numbers below n

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
//add arr with 1 to n
//filter arr with only odd nums
//return length

//This is not efficient for larger numbers

// function oddCount(n){
//   return Array.from({length: n}, (_, i) => i+1).filter((num) => num % 2 != 0).length - 1
// }


function oddCount(n){
  return Math.floor( n/ 2)
}




//Codewars
function oddCount(n){
 /*
  var returnArray = [];
  for(var i=1;i<n;i=i+2) {
    returnArray.push(i);
  }
  return returnArray.length;
 */
 return parseInt(n/2);
}



//Codewars
function oddCount(n){
  let odd = Math.round((n - 1) / 2);
  return odd;
}



