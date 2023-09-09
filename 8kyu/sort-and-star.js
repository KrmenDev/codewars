// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//My Solution

//P: list string (array), letters, no numbers, or symbols, never empty
//R: String first letter with *** between each letter
//E:
/// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] => 'b***i***t***c***o***i***n'
/// ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] => 'a***r***e'
//P: order array return fisrt element
//separate word and replace spaces with *** between letters

function twoSort(s) {
    return s.sort().slice(0,1).toString().split('').toString('').replaceAll(',','***')
}



//CodeWars
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }



//CodeWars
const twoSort = s => [...s.sort()[0]].join('***');