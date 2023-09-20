// Description:

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


//my Solution


//P: A string, with always > 0, never empty, never nums
//R: An array with word and a space then the length of word
//E: "apple ban" --> ["apple 5", "ban 3"]
//E: "you will win" -->["you 3", "will 4", "win 3"]
//P: separate string, add each element to an array, count the length of each element, add it to an array 


function addLength(str) {
    return str.split(' ').map((word)=> word + ' ' + word.length)
    }




//CodeWars
function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }



//CodeWars
function addLength(str) {
    var split = str.split(" ");
    var result = [];
     
    for (i = 0; i < split.length; ++i) {
      result.push(split[i] + " " + split[i].length);
    } 
    return result;  
  }