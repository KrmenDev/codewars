// Description:

// Complete the solution so that the function will break up camel casing, using a space between words.


//string, always valid
//return string with spaces
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//check string if uppercase add a space next
//change string to arr, map the arr if element is uppercase add a space, then join and return string


function solution(string) {
  return string.split('').map((e) => e === e.toUpperCase() ? ' ' + e : e ).join('')
}


//Codewars
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}



//Codewars
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}



//Codewars
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}