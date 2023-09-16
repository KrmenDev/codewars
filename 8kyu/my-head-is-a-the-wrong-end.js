// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!


//My Solution


//P: Array with strings, always 3 values, never empty
//R: Array or ordered elements
//E:
/// ["tail", "body", "head"] => ["head", "body", "tail"]
/// ["bottom", "middle", "top"] => ["top", "middle", "bottom"]
/// ["ground", "rainbow", "sky"] => ["sky", "rainbow", "ground"]
//P: 

function fixTheMeerkat(arr) {
    return arr.reverse()
   }

 


//CodeWars
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]



//Codewars
function fixTheMeerkat(arr) {
    return [arr[2], arr[1], arr[0]];
  }