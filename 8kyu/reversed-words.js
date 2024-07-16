// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


//P: string, never empty, lowercase maybe uppercase
//R: string with words reverse order
//E: "hello world!" => "world! hello"
//E: "yoda doesn't speak like this" => "this like speak doesn't yoda"
//P: split string into array then reverse string order and join to return string 


function reverseWords(str){
    return str.split(' ').reverse().join('')
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
