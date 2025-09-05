// Description:

// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

// The following are examples of how this function would be used and what the expected results would be:

// flatten(1, [2, 3], 4, 5, [6, [7]]) ==> [1, 2, 3, 4, 5, 6, 7]


//multidimensional arrays or arguments, always valid?
//return a single level array
//('a', ['b', 2], 3, 666, [[4], ['c']]) ==> ['a', 'b', 2, 3, 666, 4, 'c']
//use flat method



function flatten(...args) {
    return [args].flat(Infinity);
}



//Codewars
function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){              
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
}


//Codewars
'use strict';
let flatten = (...input) => {
  return input.reduce((result, current) => {
    return Array.isArray(current) ? 
            result.concat(flatten(...current)) :
            result.concat(current);
  }, []);
}



//Codewars
const flatten = (...args) =>
  args.reduce((pre, val) => pre.concat(Array.isArray(val) ? flatten(...val) : val), []);