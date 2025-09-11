// Description:

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3])  ==> [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]])  ==> [[1,2,3]]


//array multi level
//return array with 1 level flat
//use flat method 1


function flatten(array) {
    return array.flat(1);
}



//Codewars
var flatten = function (lol){
  return [].concat.apply([],lol);
}



//Codewars
var flatten = function (array) {
  return array.flat();
};



//Codewars
var flatten = function (array){
  return array.reduce(function(a,z) {
    return a.concat(z);
  }, []);
}