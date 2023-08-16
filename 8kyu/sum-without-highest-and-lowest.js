// DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


//My Solution
//P: always a num, positive, negative num, can be empty, null or 1, 2 num 
//R: A single num, positive or negative
//E:
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6
//{} => {}
// {3} => {}
// {-6, 20, -1, 10, -12 } => 3

function sumArray(array) {
    //if empty or less than 3 return 0
        if(array == null || array.length < 3){
            return 0
        }else{
            //filter out the first high and low num of the arr
            let sorteddArr = array.sort(function(a,b){return a-b}).slice(1, -1)
                        //summ all remaining nums
            return sorteddArr.reduce((a, b) => a + b, 0)
        }
}


//CodeWars
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


//CodeWars
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }