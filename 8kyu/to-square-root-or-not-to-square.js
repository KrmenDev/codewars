// Description:

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.

//My Solution

//P: Always a number whole and positive, never empty or null
//R: Array of nums if the num squared is whole return num else return the square
//E:
// [ 4, 3, 9, 7, 2, 1 ] => [ 2, 9, 3, 49, 4, 1 ]
// [ 100, 101, 5, 5, 1, 1 ] => [ 10, 10201, 25, 25, 1, 1 ]
//P: if the element squared is whole return the square else multiply num * num


function squareOrSquareRoot(array) {
    return array.map((e)=> {
        if(Math.sqrt(e) % 1 == 0){
            return Math.sqrt(e)
        } else {
            return e * e
        }
    });  
  }




//CodeWars
function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
  }



//CodeWars
const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));