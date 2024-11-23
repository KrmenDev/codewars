// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"


//String, can be empty
//return char in the string length
//"","z" => ""
// "abc","" => ""
//"_3ebzgh4","&" => "&&&&&&&&"
// replace text with char


function contamination(text, char){
    let charString = ''
    for(let i = 1; i<=text.length; i++){
        if(text === ""){
            return ""
        }else{
            charString += char
        }
    }
    return charString
  }


  
//Codewars
function contamination(text, char){
    return char.repeat(text.length)
  }



//Codewars
var contamination = (text, char) => [...text].map(e => e = char).join('')