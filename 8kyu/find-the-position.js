// Description:

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested


//Char of the alphabet => 1 - 26
// return the position as a string => "Position of alphabet: 1"
// use charCodeAt method to return the index


function position(letter){
    let alphIndex = letter.charCodeAt(1) - 97 + 1
    return `Position of alphabet: ${alphIndex}`
  }




//Codewars
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }



//Codewars
position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;