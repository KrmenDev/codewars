// Description:

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.


//My Solution


//P: array of nums, always positive, never empty, always whole
//R: Array of no duplicate nums
//E: [1, 1, 2] -> [1, 2]
//E: [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
//E: [1] -> [1]
//P:Create a new Set to store unique values
//Return array

function distinct(a) {
  return Array.from(new Set(a))
}


//CodeWars
function distinct(a) {
  return [...new Set(a)];
}



//CodeWars
function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
  }
