// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//     don't worry about uppercase vowels

//P: string lowercase letters, no uppercase
//R: string without vowels
//E: 
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
//P: use a loop to check each letter in string if is a vowel remove it from string return string


function shortcut (string) {
    return string.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '')

}


function shortcut (string) {
    let noVowels = ''
    for(let i = 0; i < string.length; i ++){
        if(string[i] != 'a' || string[i] != 'e' || string[i] != 'i' || string[i] != 'o' || string[i] != 'u'){
            noVowels += string[i]
        }
    };
    return noVowels
  }

  

//CodeWars
  function shortcut (string) {
    let noVowels = ''
    for(let i = 0; i < string.length; i ++){
        if(string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u'){
            noVowels += string[i]
        }
    };
    return noVowels
  }
  


//CodeWars
function shortcut (string) {
    return string.split('').filter((e) => e != 'a' || e != 'e' || e != 'i' || e != 'o' || e != 'u').join('')
  }





  //Codewars
  function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }