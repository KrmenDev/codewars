// DESCRIPTION:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


//the dish must start and end with the same letters as the animal's name

//P: two strings always lower case each more than two letters, never empty
//R: boolean 
//E: 'chikadee', 'chocolate cake' => true
//E: 'brown bear', 'bear claw' => false
//P: check each word and compare the first and last
//P: grab first and last letter of beast and first and last of dish compare and return boolean


function feast(beast, dish) {
    return beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1) ? true : false
}


    function feast(beast, dish) {
        let beastLastLetter = beast.slice(-1)
        let dishLastLetter = dish.slice(-1)
        if(beast.charAt(0) === dish.charAt(0) && beastLastLetter === dishLastLetter){
            return true
        }else{
            return false
        }
    }


    //CodeWars Best Practice
    function feast(beast, dish) {
        return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
    }

    
    //CodeWars 2 Best Practice
    function feast(beast, dish) {
        return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
      }
