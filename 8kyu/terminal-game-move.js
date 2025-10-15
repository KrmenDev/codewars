// Description:
// Terminal game move function

// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:

// move(3, 6) should equal 15


//numbers, always positive, can include zero
//return number of position
//(3,6) => 15
//(2,5) => 12
//(0,4) => 8
//roll * 2 + position

function move (position, roll) {
  return position + (roll * 2)
}


//codewars
const move = (position, roll) => position + roll * 2



//Codewars
function move (position, roll) {
  return position + roll * 2
}


//Codewars
function move (position, roll) {
  const newPosition = position + roll * 2;
  
  return newPosition;
}