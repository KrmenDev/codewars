// Description:
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

//string lower and uppercase
// return as string with inverted uppercase or lowercase
//"hello" => "HELLO"
//"World" => "wORLD"
//"abCD" => "ABcd"
//change string to arr
//if char is upper change to lower
//return string

String.prototype.toAlternatingCase = function () {
    return this.split('').map((char) => char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
  }




//Codewars
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}



//Codewars
String.prototype.toAlternatingCase = function () {
    new_str = "";
    for(var i = 0; i < this.length; i++) {
      if(this[i] === this[i].toUpperCase()) {
        new_str += this[i].toLowerCase();
      }
      else {
        new_str += this[i].toUpperCase();
      }
    }
    return new_str;
  }



//Codewars
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};