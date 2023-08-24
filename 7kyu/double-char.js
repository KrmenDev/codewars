// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//My Solution

//P: always a string, numbers, letters, and symbols, never empty, case sensitive
//R: return a string with each caracter repeated once
//E: "abcd"  => "aabbccdd"
//// "1337" => "11333377"
/// "@#$" => "@@##$$"
//P: 
// 1.- check every char in string
// we need a lopp and return a new string
// 2.- repeat each char
// 3.- Return string with chars


function doubleChar(str) {
    return str.split('').map(i => i+i).join('');
  }



//CodeWars
function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
}