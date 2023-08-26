// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


//My Solution

//P: string, never empty, capital and lower case, only letters, no numbers
//R: Array with indexes
//E: "CodEWaRs" --> [0,3,4,6]
//P: check each element on string
// if capital letter 
//return index in new array

var capitals = function (word) {
    const indexArray = []
    word.split('').forEach((element,index) => {
       return element == element.toUpperCase() ? indexArray.push(index) : element
         })
    return indexArray
}



//CodeWars
var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  }



//CodeWars
  var capitals = function (word) {
	return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};

