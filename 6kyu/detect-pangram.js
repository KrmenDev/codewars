// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//P: string, lowercase and uppercase
//R: boolean true if contains all letters of alphabet
//E: "The quick brown fox jumps over the lazy dog" => true
//P: check if string includes each letter of alphabet 

function isPangram(string){
    let str = string.toLowerCase().replace(/[^a-z]/g,'') //regex removes everything that isn't a letter
    let sorted = new Set(str).size
    return sorted == 26 ? true : false
  }


//Codewars
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }


  //Codewars
  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }
