// Oh no!

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.


//P: array of string numbers, can be floated and whole
//R: array of numbers
//E: ["1.1","2.2","3.3"]) => [1.1,2.2,3.3]
//P: iterate through array and convert string number to number, return array

function toNumberArray(stringarray){
    return stringarray.map((e) => +e)
  }



//codewars
function toNumberArray(stringarray){
    return stringarray.map(Number);
  }

