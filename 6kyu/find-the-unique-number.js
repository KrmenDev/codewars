// escription:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.




//arr of integers, always positive, always valid
//return the unique integer
//[ 1, 0, 0 ] => 1
//[ 3, 10, 3, 3, 3 ] => 10
//filter the arr and if the number has the same index of and last index of is unique

function findUniq(arr) {
  return +arr.filter((num) => arr.lastIndexOf(num) == arr.indexOf(num))
}


//Codewars
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}



//Codewars
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


//Codewars
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}