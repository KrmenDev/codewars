// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


//P: string player 1 and string player 2, never empty
//R: string of wich player won
//E: 'rock', 'scissors' => 'Player 1 won!'
//E: 'paper', 'paper' => 'Draw!'
//P: compare if p1 rock and p2 scissors p1 wins else p2


const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors'){
    return "Player 1 won!"
  }
  else if (p2 === 'scissors' && p1 === 'paper' || p2 === 'paper' && p1 === 'rock' || p2 === 'rock' && p1 === 'scissors'){
    return "Player 2 won!"
  }else{
    return 'Draw!'
  }
};


//CodeWars Best
const rockPaperScissors = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };

//rules is an object with key: value
//we can access it passing object['key']
//we get the value if the vaule match the key return the p1 won
//if they dont match return p2 won


//codeWars
const rockPaperScissorss = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  };