// Description:
// Task

// Your task is to write a function for calculating the score of a 10 pin bowling game. The input for the function is a list of pins knocked down per roll for one player. Output is the player's total score.
// Rules
// General rules

// Rules of bowling in a nutshell:

//     A game consists of 10 frames. In each frame the player rolls 1 or 2 balls, except for the 10th frame, where the player rolls 2 or 3 balls.

//     The total score is the sum of your scores for the 10 frames

//     If you knock down fewer than 10 pins with 2 balls, your frame score is the number of pins knocked down

//     If you knock down all 10 pins with 2 balls (spare), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next ball

//     If you knock down all 10 pins with 1 ball (strike), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next 2 balls

// Rules for 10th frame

// As the 10th frame is the last one, in case of spare or strike there will be no next balls for the bonus. To account for that:

//     if the last frame is a spare, player rolls 1 bonus ball.
//     if the last frame is a strike, player rolls 2 bonus balls.

// These bonus balls on 10th frame are only counted as a bonus to the respective spare or strike.
// More information

// http://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring
// Input

// You may assume that the input is always valid. This means:

//     input list length is correct
//     number of pins knocked out per roll is valid



var bowlingScore = function(rolls) {
  //TODO: calculate score
  return -1
}



//Codewars
var bowlingScore = function(rolls) {
  var score = 0, i = 0, frame = 1;
  while(frame <= 10) {
    score += rolls[i] + rolls[i+1];
    if(rolls[i] + rolls[i+1] >= 10) score += rolls[i+2];
    if(rolls[i] !== 10) i++;
    i++;
    frame++;
  }
  return score;
}


//Codewars
var bowlingScore = function(rolls) {
  var index = 0;
  var score = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (rolls[index] == 10) {
      score += 10+rolls[index+1]+rolls[index+2];
    } else if (rolls[index]+rolls[index+1]==10) {
      score += 10+rolls[index+2];
      index++;
    } else {
      score += rolls[index]+rolls[index+1];
      index++;
    }
    index++;
  }
  return score;
}


//Codewars
function bowlingScore (rolls, frame = 0) {
  const isStrike = rolls[0] === 10;
  const isSpare = rolls[0] + rolls[1] == 10;
  
  let score = rolls.slice(0, isStrike || isSpare ? 3 : 2).reduce((t, pins) => t + pins, 0);
  if (frame !== 9) score += bowlingScore(rolls.slice(isStrike ? 1 : 2), frame + 1);
  
  return  score;
}