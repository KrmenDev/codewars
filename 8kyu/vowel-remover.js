// reate a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//     don't worry about uppercase vowels

//P: string lowercase letters, no uppercase
//R: string without vowels
//E: 
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
//P: use a loop to check each letter in string if is a vowel remove it from string return string


//I'm trying to solve a codewars challenge we are supposed to remove vowels from a string, I want to understand what is wrong with this two options to solve it, I'm a using != and || wrong?

function shortcut (string) {
    let noVowels = ''
    for(let i = 0; i < string.length; i ++){
        if(string[i] != 'a' || string[i] != 'e' || string[i] != 'i' || string[i] != 'o' || string[i] != 'u'){
            noVowels += string[i]
        }
    };
    return noVowels
  }

  function shortcut (string) {
    let noVowels = ''
    for(let i = 0; i < string.length; i ++){
        if(string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u'){
            noVowels += string[i]
        }
    };
    return noVowels
  }
  

  console.log(shortcut("hello"), "hll")



function shortcut (string) {
    return string.split('').filter((e) => e != 'a' || e != 'e' || e != 'i' || e != 'o' || e != 'u').join('')
  }




  //Codewars
  function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }