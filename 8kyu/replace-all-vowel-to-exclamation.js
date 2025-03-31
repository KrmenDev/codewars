// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "ABCDE" --> "!BCD!"

// string, letters lowercase and uppercase and symbols, never empty
// all vowels replaced with !
// "aeiou" --> "!!!!!"
// "AEIOU" => "!!!!!"
// "Hola!" => "H!l!!"
// go through the string with a loop if vowel replace with !




function replace(s) {
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
      return s.split('').map((e) => vowel.indexOf(e) == -1 ? e : '!').join('');
  }




//Codewars
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }



//Codewars
const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');



//Codewars
function replace(s){
    var newS = ''
    var vowels = "aAeEiIoOuU"
    for (var i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) === -1) {
        newS += s[i]
      }  else {
        newS += '!'
      }
    }
    return newS
  }



//Codewars
const replace = w => (w.split('').map(e => ['a','e','i','o','u'].includes(e.toLowerCase()) ? '!' : e)).join('');