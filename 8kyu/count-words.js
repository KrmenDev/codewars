// Description:

// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on

// What kind of tests we made for your code:

//     Function have to count words and not spaces. You have to be sure that you doing it right
//     Empty string has no words.
//     String with spaces around should be trimmed.
//     Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
//     Doublecheck that words with chars like -, ', ` are counted right.


//String with words, spaces and symbols
// How many words in string as integer
//"Hello" => 1
//"Hello, World!" => 2
//"" => 0
//"With! Symbol@ #Around! (Every) %Word$" => 5
//change string to array, use length

function countWords(str) {
    return str
      .replaceAll(String.fromCharCode(65279), ' ')
      .split(' ')
      .filter((e) => e != '')
      .length
   }



//Codewars
function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
  }



//Codewars
const countWords = str => str.split(/\s+/).filter(x => x).length