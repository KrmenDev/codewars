// Description:

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//string, can be empty, lower and uppercase
//return true or false
// "a" => true
// "AbBa" => true
// "Hello" => false
// "Bob" => true
// turn string to lower case
// reverse and compare


function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase() === x.toLowerCase()
  }




//Codewars
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }




//Codewars
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();



//Codewars
function isPalindrome(x) {
    x = x.toLowerCase()
    let a = 0
    let b = x.length
    while (a < b) {
      if (x[a] != x[b-1])
        return false
      a++
      b--
    }
    return true
  }
