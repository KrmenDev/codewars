// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples


// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"


// "1"    =>  NULL
// "1,2"  =>  NULL

//string always valid, can be empty
//return string without first and last char
// "1,2,3"      =>  "2"
// ""     =>  NULL
//string to arr and unshift and pop elements join and return

function array(string) {
    let arr = string.split(',')
    return arr.length <= 2 ? null : arr.slice(1, -1).join(' ')
}



//Codewars
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}



//Codewars
// it is not array
const array = (arr) => {
  arr = arr.split(',')
  arr.pop()
  arr.shift()
  return arr.join(' ') === '' ? null : arr.join(' ')
}


//Codewars
function array(arr){
  arr = arr.split(',');
  
  if (arr.length < 3) {
    return null;
  }

  return arr.slice(1, arr.length - 1).join(' ');
}