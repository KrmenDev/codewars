// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


//P: array of numbers, can be positive or negative can be empty
//R: the sum of all the positive numbers
//E: [1,2,3,4,5] => 15
//E: [] => 0
//E: [-1, -2, -3] => 0
//E: [-1, 2, 3, 4 -5] =>9
//P: if the number is above 0 add to array the summ all


function positiveSum(arr) {
  let positives = arr.filter((e) => e > 0)
  return positives.reduce((acc, c) => acc + c, 0)
}


  //CodeWars Best Practice
function positiveSum(arr) {
    let total = 0;
    for ( i = 0; i < arr.length; i++)
      if(arr[i] > 0){
        total += arr[i];
      }
    return total;
  }

//Best Practice
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }
