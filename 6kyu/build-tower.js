// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]



//number, always positive, always valid
//return arr with '*' depending on nFloors
//1 => ["*"]
//2 => [" * ","***"]
//3 => ["  *  "," *** ","*****"]
//if 1 return arr with no spaces
//if 2 or more add two espaces each side
//take one space out for each number above 1
//loop

function towerBuilder(n) {
  return Array.from({length: n}, function(e, i) {
    const spaces = ' '.repeat(n - e - 1);
    return spaces + '*'.repeat(i + i + 1) + spaces;
  });
}




//Codewars
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}



//Codewars
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}



//Codewars
function towerBuilder(nFloors) {
  // build here
  let space,star, tower = [];
  for(i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower
}