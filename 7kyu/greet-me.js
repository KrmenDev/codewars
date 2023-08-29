// DESCRIPTION:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

//My solution

//P: Always a string, never empty, always just a name, symbols?, numbers?
//R: return a string 'Hello Name'
//E: 
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//P: Make name upper Case
//concat with string Hello 

var greet = function(name) {
    return `Hello ${name.charAt(0).toUpperCase()}${name.toLowerCase().slice(1)}!`
}



//CodeWars
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  }




//CodeWars
var greet = function(name) {
    return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
  };