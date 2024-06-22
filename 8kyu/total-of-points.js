// DESCRIPTION:
// Our football team has finished the championship.

//Our team's match results are recorded in a collection of strings. 
//Each match is represented by a string in the format "x:y"
//where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:
// our team always plays 10 matches in the championship



//P: array of string numbers, always 10 elements x:y format where x is our teams score if x > y => 3, if x < y = 0, else x = y => 1 
//R: Total of points of x (integer)
//E: (["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) => 30
//E: (["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) => 0
//P: compare if x > y add 3 to a total if equal add 1 else 0
// return total 

function points(games) {
  let total = 0
  games.map((game) => game[0] == game[2] ? total += 1 : game[0] > game[2] ? total += 3 : total += 0 )
  return total 
}




//CodeWars Best Practice
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}



//CodeWars Best Practice 2
function points(games) {
  // totalPoints will store the accumulated points
  let totalPoints = 0;
    
    // loop through the games array to get the scores
    for(i=0; i<games.length; i++) {
   
     // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
      let xScore = Number(games[i].charAt(0)); 
      let yScore = Number(games[i].charAt(2));
      
      // Add points depending on the values of xScore compared to yScore
      if (xScore > yScore) { totalPoints += 3; }
      if (xScore < yScore) { totalPoints += 0; }
      if (xScore === yScore) { totalPoints += 1; }
    }
    
    return totalPoints;
  }


//Codewars
                                  //Destructuring assignment
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)