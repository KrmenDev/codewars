// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

//     The length of string is not always the same as the number of characters

// For example: (Input1, Input2) --> output



// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"


//P: string a and string b, never empty, different or equal length
//R: shortest string longest string and shortest string again 
//E:
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
//P: check string lengts add the short one first the long second and again the shortest


function solution(a, b){
    if(a.length > b.length){
      return b.concat(a).concat(b)
    }else{
      return a.concat(b).concat(a)
    }
  }





  //Codewars 
  function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }

  
//Codewars
// Using if...else, explicit block syntax
function solution(a, b) {
  if (a.length < b.length) {
      return a + b + a;
  } else {
      return b + a + b;
  }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
  if (a.length < b.length) return a + b + a;
  return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
  return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
  (a.length < b.length) ? (a + b + a) : (b + a + b);