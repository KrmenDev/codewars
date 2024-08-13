// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//P: Array numbers
//R: Array with numbers and lowercase vowels
// a = 97, e = 101, i = 105, o = 111, u = 117
//E: [118,117,120,121] = [118, "u", 120, 121]
//  [113, 113, 103, 121, 121, 101,107,103] => [113, 113, 103, 121, 121, "e",107,103]
//P: check each element in array, if matches the value of vowel code replace and return array

function isVow(a){
  return a.map((e) => 
    e === 97 ? 'a' 
  : e === 101 ? 'e' 
  : e === 105 ? 'i' 
  : e === 111 ? 'o' 
  : e === 117 ? 'u' 
  : e)
}


//CODEWARS BEST
const v = {"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow = a => a.map( x => v[x] || x)



//codewars
function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}


//codewars
const isVow = a => 
  a.map(x => 'aeiou'.includes(y = String.fromCharCode(x)) ? y : x)

