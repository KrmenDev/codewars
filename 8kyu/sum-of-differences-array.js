// Description:

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0

//My Solution


//P: Array, whole nums, positive, emty or jus one num
//R: Sum of the diferences between pairs
//E: [2, 1, 10]  -->  9
//E: [-3, -2, -1] --> 2
//P: reverse array
//P: group pairs and substract
//P: store answers and sum them 
//P: Return Sum

function sumOfDifferences(arr) {
    let sum = 0
    let reversed = arr.sort((a,b) => b - a)
    for(let i = 0; i < reversed.length -1; i++){
        sum += (arr[i] - arr[i + 1]);
    }
    return sum
}



//CodeWars
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}



//CodeWars
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);

