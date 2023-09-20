// Description:

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.


//My Solution

//P: array strings, always one wolf, never empty, never not a string
//R: A string to make the wolf go away or to tell the sheep to move
//E: ["sheep", "sheep", "sheep", "wolf", "sheep"] => "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//E: ["sheep", "sheep", "wolf"] => "Pls go away and stop eating my sheep"
//P: start checking on last index
//if first element is a wolf return string
// else return string telling the element with index to move


function warnTheSheep(queue) {
    let wolf = queue.reverse().indexOf('wolf')
    if(wolf == 0){
        return  "Pls go away and stop eating my sheep"
    } else{
        return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
    }
}




//CodeWars
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }



  //CodeWars
  function warnTheSheep(q) {
    return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
  }