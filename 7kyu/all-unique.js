// Description:

// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.



//String with 128 ASCII Char, spaces count
//Return Boolean if string contains only unique char
// "  nAa" => false
// "abcdef" => true
//"aA" => true
//"++-" => false
// create a set and compare to str if its the same length return true else false


function hasUniqueChars(str){
    return new Set(str).size == str.length ? true : false 
  }


//Codewars
let hasUniqueChars = (str) => new Set(str).size === str.length;


//Codewars
function hasUniqueChars(str){
    return str.split('').every(function(v, i, arr){
      return arr.indexOf(v) == i;
    });
  }