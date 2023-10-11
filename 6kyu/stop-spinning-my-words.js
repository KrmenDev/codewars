// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> "This is rehtona test"



//My Solution


//P: Strings, one or more words, only letters and spaces, never empty
//R: same string if word more than 5 letters reverse that word
//E: "Welcome" -> "emocleW"
//E: "Just kidding there is still one more" -> "Just gniddik ereht is llits one more"
//P: check if length of string is >= 5 reverse word
//P: return string


  function spinWords(string){
    let words = string.split(' ')
    let array = []
    for(let i=0; i<words.length; i++){
        if(words[i].length >= 5){
            array.push(words[i].split('').reverse().join(''))
        }else{
            array.push(words[i])
        }
    }
    return array.join(" ")
  }





//CodeWars
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }




//CodeWars
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
    ///\w{5,}/g replace 5 or more letter word
  }



  

//CodeWars
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }