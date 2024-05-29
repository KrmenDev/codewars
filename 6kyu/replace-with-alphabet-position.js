// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


//P: string uppercase and lowecase, can have numbers or symnols
//R: string of numbers of alphabet position
//E: "midnight" => "13 9 4 14 9 7 8 20"
//P: make string lowercase and remove everything that isn't a letter, check if the str includes the letter and retur its index


function alphabetPosition(text) {
    let str = text.toLowerCase().replace(/[^a-z]/g,'').split('')
    //regex removes everything that isn't a letter
    let alph= 'abcdefghijklmnopqrstuvwxyz'.split('')

    return str.map(function(letter){
        if(alph.includes(letter)){
            return (alph.indexOf(letter)+1)
        }
    }).join(' ')
}






//codewars
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
  }
  

  


//codewars
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

//-64 = beacuse we use .UpperCase(), if ch = 'A' after charCodeAt(0), ch = 65 , -64 we got 1, if 'b' we got 2 (the value we need), if you use .toLowerCase() 'a' = 97 then -96



//
