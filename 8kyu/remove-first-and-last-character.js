// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//My solution
function removeChar(str){
    return str.replace(str[0], "").replace(/.$/, '')
  
  }

  //CodeWars Best Practice
function removeChar(str) {
    return str.slice(1, -1);
  }
