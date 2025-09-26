// Description:

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



//string letters and symbols
//return string first letter at the end of word and ay added
//'This is my string' => 'hisTay siay ymay tringsay'


//split string to arr separated by spaces
//grab each word 
//grab first letter ans move it to the end and ad ay
//return as string


function pigIt(str){

  let arr =str.split(' ')
  let modifiedStr = []

  for(const word of arr){

    let firstChar = word.charAt(0) 
    let restWord =  word.slice(1)

    if(/^[^\w\s]$/.test(word)){
         // Checks for symbol or punctuation
        modifiedStr.push(restWord + firstChar ) 
    }else{
        modifiedStr.push(restWord + firstChar + 'ay')
    }
  }
  return modifiedStr.join(' ')
}



//Codewars
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}


//Codewars
function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}


//Codewars
function pigIt(str){
  return str
    .split(' ')
    .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
    .join(' ')
}