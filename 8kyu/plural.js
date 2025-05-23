// Description:

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//     You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.


//Number, always positive, never empty
// true or false
// 0 => true
// 1 => false
// 0.5 => true
// 100 => true
// everything that isnt 1 its false


function plural(n) {
    return n == 1 ? false : true
  }


//Codewars
function plural(n) {
    return n !== 1;
  }


//Codewars
function plural(n) {
    if (n >= 0){
      if (n == 1){
        return false;
      }else{
        return true;
      }
     }
}