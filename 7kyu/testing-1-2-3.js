// Description:

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []

//My solution


//P: Array with strings, can be empty, no numbers
//R: Array with the format [n: "string"]
//E: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//P: replace each index with the number (starting at 1)
//P: Add : and string for each index


var number=function(array){
    return array.map((element, index) => (index + 1) + ": " + (element))
  }



//CodeWars
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }



//CodeWars
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
