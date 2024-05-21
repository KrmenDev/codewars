// Description:

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


//P: 10 integers, from 0 to 9, whole and positive numbers only
//R: String with 10 numbers is phone format "(123) 456-7890"
//E: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
//P: return numbers of array first three inside parenthesis 
// then a space and the next three numbers follow by a - and the final three numbers


function createPhoneNumber(numbers){
    let firstThree = [numbers[0],numbers[1], numbers[2]].join('')
    let secondThree = [numbers[3],numbers[4], numbers[5]].join('')
    let finalThree = [numbers[6],numbers[7], numbers[8], numbers[9]].join('')
    return `(${firstThree}) `+ `` + `${secondThree}-`+ finalThree
}


//Codewars
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
