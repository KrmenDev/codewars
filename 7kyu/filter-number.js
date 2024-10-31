// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
// Task

// Your task is to return a number from a string.
// Details

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//string with nums and letters
// string number as number
//check each char if num return


function filterString(value) {
    return Number(value.split('').filter((char) => Number(++char)).join(''))
  }



//Codewars
const filterString = (v) => +[...v].filter(el => '0123456789'.includes(el)).join('')



//Codewars
var filterString = function(value) {
    let result = '';
    for (let i of value){
      if (!isNaN(Number(i))) result += i;
    }
    return Number(result);
  }