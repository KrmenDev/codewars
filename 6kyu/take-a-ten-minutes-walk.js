// Description:

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


//string array, never empty, always valid
// return true if walk is exactly 10 min back and forth
//['w'] => false
//['n','s','n','s','n','s','n','s','n','s'] => true
//['w','e','w','e','w','e','w','e','w','e','w','e'] => false
//if arr length is 10 
//and if all n,s,e,w are the same length return true

function isValidWalk(walk) {
    let north = walk.filter((e) => e === 'n').length
    let south = walk.filter((e) => e === 's').length
    let east = walk.filter((e) => e === 'e').length
    let west = walk.filter((e) => e === 'w').length

    return walk.length === 10 && north === south && east === west
  }



//Codewars
function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }



//codewars
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }


//Codewars
function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){
        return a == val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }


