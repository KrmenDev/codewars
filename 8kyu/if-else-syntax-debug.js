// Description:
// If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.


//number, can be negative
//return true if health > 0 else false



function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }



//Codewars
function checkAlive(health) {
    return health > 0;
  }



//Codewars
function checkAlive (health) {
    return health > 0 ? true : false;
  }



//Codewars
function checkAlive(health) {
    if (health <= 0) {
      return false;
    } 
    else {
      return true;
    }
  }