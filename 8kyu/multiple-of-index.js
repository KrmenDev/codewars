// Description:

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]



//My Solution

//P: Array of nums, positive and negative, whole and floated?, always more than 0
//R: Array of multiple nums
//E: [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
//E: [68, -1, 1, -7, 10, 10] => [-1, 10]
//E: [0,2,3,6,9] => [0,2,6]
//P: Loop each num and if the num is multiply of its index put in new array
//P: Return new array

function multipleOfIndex(array) {
    return array.filter((num, indx) => num % indx === 0 || num == 0)
  }




//CodeWars
function multipleOfIndex(array) {
    return array.filter((val, i) => ((val%i == 0) || (val == 0 && i == 0)));
  }



//CodeWars
function multipleOfIndex(array) {
    const result = [];
  for (let i = 0; i < array.length; i++) {
   if (array[i] % i === 0 || array[i] === 0) {
      result.push(array[i]);
    }
  }
  return result;
  
}