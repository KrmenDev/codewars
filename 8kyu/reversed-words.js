// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
    return str; // reverse those words
  }


  //My Solution
  function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }


//CodeWars
  const reverseWords = (str) => str.split(" ").reverse().join(" ");



//codewars
function reverseWords(str){
  var reverse = [];
  var words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
    
  }
  return reverse.join(" ")
}
