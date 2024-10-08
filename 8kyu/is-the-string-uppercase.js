// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//P: string, letters lowercase and uppercase
//R: Boolean
//E: c -> False
//   C -> True
//   HELLO -> True
//   GOoD -> False
//P: Check each character in string if lowecase return False else true


String.prototype.isUpperCase = function() {
  return this == this.toUpperCase(Boolean)
}

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase() ? true : false
  }


//codewars
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

//codewars
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}