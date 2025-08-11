// Description:

// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]


//array and a string always valid
// return arr with the predicated filtered out of arr
//use filter to filter out whatever is in predicate


function reject(array, predicate) {
    return array.filter((x)=> !predicate(x));
}


//Codewars
const reject = (array, iterator) => array.filter(curr => !iterator(curr));


//Codewars
function reject(array, iterator) {
  return array.filter(function(x) {return !iterator(x);});
}


//Codewars
function reject(array, iterator) {
	return array.filter(function(x){ if(!iterator(x)) return x; });
}


//Codewars
function reject(array, iterator) {

  var negIterator = function(val) {
    return !iterator(val);
  }
  
  return array.filter(negIterator);
  
}