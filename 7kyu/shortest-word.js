// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s){
}


//My Solution
function findShort(s){
    let wordsArray = s.split(' ').sort((a,b) => a.length - b.length )
    console.log(wordsArray)
    return wordsArray[0].length
}


//CodeWars Best Practice
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

  

  //CodeWars
  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


//CodeWars
function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
  }