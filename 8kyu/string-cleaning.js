// Description:

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.



//P: string, never empty, upper and lower case symbols and numbers, keep white spaces
//R: string without numbers
//E: "123456789" => ""
//E: "A1 A1! AAA   3J4K5L@!!!" => "A A! AAA   JKL@!!!"
//P: create an array and use filter or map if number remove return string


function stringClean(s){
    return s.split('').filter((char) => isNaN(char) || char == ' ').join('')
  }



//Codewars
function stringClean(s){
    return s.replace(/\d/g, "");
  }

  
  
//Codewars
function stringClean(s){
    return s.split('').filter((n) => n != parseInt(n)).join('');
  }
  

  
