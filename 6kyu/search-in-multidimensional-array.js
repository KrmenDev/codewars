// Description:

// Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

// Example:

// ['a','b',['c','d',['e']]] , 'e' --> true
// ['a','b',['c','d',['e']]] , 'a' --> true
// ['a','b',['c','d',['e']]] , 'f' --> false



//multidimensional array, with 'strings', can be empty?, contains only strings?
//return boolean if value is present
//use flat to concat nested arr and see if arr includes value

function locate(arr, value) {
    return arr.flat(Infinity).includes(value);
}


//Codewars
var locate = function(arr, v) {
  return arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });
}



//Codewars
var _ = require("underscore")
var locate = function(arr,value){
    return _.flatten(arr).indexOf(value)>=0
}


//Codewars
/* iterative breadth-first search with queue */
function locate(array, value){
  var queue = array,
      next;
  while(queue.length){
    next = queue.shift();
    if(Array.isArray(next)){
      queue = queue.concat(next);
    } else if(next == value){
      return true;
    }
  }
  return false;
}