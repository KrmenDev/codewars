// Description:

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//number, always positive?, always valid
//return the sum of all digits in n until one digit result
//456 => 6
//split a number, reduce
//if num >= 10 split again and reduce


function digitalRoot(n) {
  let sum = String(n).split('').reduce((acc,c) => acc + Number(c),0)

  while(sum >= 10){
    sum = String(sum).split('').reduce((acc,c) => acc + Number(c),0)
  }
  return sum
}



//Codewars
function digital_root(n) {
  return (n - 1) % 9 + 1;
}



//Codewars
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}


//Codewars
function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}