// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//P: array of numbers, positives and negatives, never empty
//R: inverted numbers if positive return negative
//E: [1,-2,3] => [-1, 2, -3]
//E: [-5, -6, -8, -9, 2, 8, 1] => [5, 6, 8, 9, -2, -8, -1]
//P: check each number and return its opposite, use map
function invert(array) {
    return array.map((e) => Math.abs(e) === e ? -Math.abs(e) : Math.abs(e))
 }


 function invert(array) {
    return array.map( e => e === +e ? -e : +e )
 }



 //CodeWars Best practice
 const invert = array => array.map(num => -num);


 
 //CodeWars
 function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }