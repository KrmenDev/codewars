// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Have fun!



//My Solution


//P: Array of integers, positive or negative, can be empty, always numbers
//R: String 'even' if sum is even or 'odd' if sum is odd
//E: [0] -> 'even'
//E: [] -> 'even'
//P: use reduce to sum array
//P: if sum is even return 'even'
//P: else return 'odd'


 function oddOrEven(array) {
    return array.reduce((acc,c)=> acc+c, 0) % 2 === 0 ? 'even' : 'odd'
 }




//CodeWars
 function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
  }



//CodeWars
  function oddOrEven(array) {
    if(array.length == 0){
      return 'even'
    }
    var sum = array.reduce(add, 0)
    function add(x, y){
      return x + y
    }
    
    if(sum % 2 == 0){return 'even'}
    else{return 'odd'}
 }