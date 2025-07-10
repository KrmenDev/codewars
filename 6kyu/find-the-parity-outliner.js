// Description:

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)



//arr of integers, always positive
//[0, 1, 2] => 1
//[0,0,3,0,0] => 3
//[2,6,8,10,3] => 3
//filter the arr of not odd or not even return the one

function findOutlier(integers){
  let odd = integers.filter((num) => num % 2 != 0)
  let even = integers.filter((num) => num % 2 == 0)

  return odd.length === 1 ? odd[0] : even[0]
}


//Codewars
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}


//Codewars
function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}


//Codewars
function findOutlier(integers){
  //your code here
  var len = integers.length;
  var first = Math.abs(integers[0]) % 2,
  second = Math.abs(integers[1]) % 2,
  third = Math.abs(integers[2]) % 2,
  base = (first + second + third) >= 2 ? 1 : 0;
  
  for (var i = 0; i < len; i++) {
    if (Math.abs(integers[i] % 2) != base) {
      return integers[i];
    }
  }
};