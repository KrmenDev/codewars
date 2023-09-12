// Description:

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//  1 -   "I love you"
//  2 -   "a little"
//  3 -   "a lot"
//  4 -  "passionately"
//  5 -   "madly"
//  6 -   "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


//My Response

//P: A numbers, whole, never empty, never a string, never negative, always positive
//R: A string with a phrase depending on the num
//E:
// 7 => "I Love you"
// 3 => "a lot"
// 6 => "not at all"
// 11 => "madly"
//P: An array with all 6 possible phrases
// return index of the array petals


function howMuchILoveYou(nbPetals) {
    let petals = ["I love you", "a little",  "a lot", "passionately",  "madly",  "not at all"]
    return petals[(nbPetals-1) % 6]
}



//CodeWars
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}



//CodeWars
function howMuchILoveYou(petals){
    const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    while(petals > 6) petals -= 6
    return arr[petals - 1]
  }