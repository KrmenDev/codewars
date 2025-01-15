// Description:

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


//string, never empty
// arr sorted alphabetically by the final char
//'man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
//'take me to semynak' => ['take', 'me', 'semynak', 'to']
//change string to arr sort by last letter 
//charCodeAt returns a number associated with char

function last(x){
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}




//Codewars
const last = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))




//Codewars
function last (words) {
    return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
  }



//Codewars
const lastChar = (str) => (str[str.length - 1] || '');
const sorter = (a, b) => lastChar(a).localeCompare(lastChar(b));
const last = (str) => str.split(' ').sort(sorter);