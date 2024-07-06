// DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


//P: integer always positive never empty
//R: string repeated n times
//E: 3 '*' => '***'
//E: 2 'ha ' => 'ha ha'
//P: use repeat method


function repeatStr (n, s) {
  return s.repeat(n);
}


//codewars
function repeatStr (n, s) {
  var str = "";
  for(var i=0; i < n; i++)
    str += s;
    return str;
  }

//codewars
let repeatStr = (n, s) => `${s.repeat(n)}`;