// Description:
// Messi goals function

// Messi is a soccer player with goals in three leagues:

//     LaLiga
//     Copa del Rey
//     Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

//3 numbers, always valid, can be zero, always positive
//return the sum of all
//0,0,0 => 0
//43, 10, 5 => 58
//add all nums to an arr and reduce


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce((acc,c) => acc + c, 0)
}




//Codewars
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}




//Codewars
const goals = (...a) => a.reduce((s, v) => s + v, 0);



//Codewars
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let goals = [ laLigaGoals, copaDelReyGoals, championsLeagueGoals ];
  return goals.reduce( ( a, b ) => a + b ,0);
}
