// Description:
// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!



//array off letters, can be upper or lowercase, always valid
//return the missing letter in alph order
//[a,c,d] => b
//[a,b] => c
//[C,D,F] => E
//Create arr with alph lower and uppercase
//check what is the index of the first element compared to alph, then check if the next one is the correct order, return the first not in order
//loop alph and return the 

function findMissingLetter(array)
{
    let alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let start = alph.indexOf(array[0])

    return alph.slice(start, start + array.length).find((el) => !array.includes(el))
  
}



//Codewars
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}



//Codewars
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};



//Codewars
function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}



//Codewars
function findMissingLetter(letters) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
      return String.fromCharCode(letters[i].charCodeAt() + 1);
    }
  }
}