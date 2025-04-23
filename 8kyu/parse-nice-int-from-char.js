// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//string with the age number
//return the age as integer
//"4 years old" => 4
//"9 years old" => 9
//the number is the first char on string
//return that as a number

function getAge(inputString){
    return Number(inputString[0])
    }



//Codewars
function getAge(inputString){
    return parseInt(inputString);
  }


//Codewars
function getAge(inputString){
    return parseInt(inputString[0]); 
  }


//Codewars
function getAge(inputString){
    return +inputString[0];
  }