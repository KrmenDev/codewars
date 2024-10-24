// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

// Example:


// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name


//Array, strings, never empty, number
// [a, b, c, d], 1 => 'a'
// [a, b, c, d], 2 => 'b'
// [a, b, c, d], 8 => 'd'
// iterate through the array and return the element that is on the index goose, if there is no index repeat elements

function duckDuckGoose(players, goose) {
    return players[(goose -1) % players.length].name
  }



  //Codewars
  function duckDuckGoose(players, goose) {
    let circle = goose;
    while(players.length < circle) {
      circle -= players.length
    }
    return players[circle - 1 ].name
  }


  //Codewars
  function duckDuckGoose(players, goose) {
  return goose ? players[(goose - 1) % players.length].name : '';
}