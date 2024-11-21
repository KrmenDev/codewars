// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].


//Array of nums, whole and positive nums, never empty, includes 0
// Array with lowest and highest and diference between 
//[82, 15, 6, 38, 35] => [6, 82, 76]
//[57, 99, 14, 32] => [14, 99, 85]
// get lowest and highest substract


function differenceInAges(ages){
    let min = Math.min(...ages)
    let max = Math.max(...ages)
    let difference =  max - min
    return Array(min, max, difference)
  }

//Codewars
function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}

//Codewars
function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    return [min, max, max-min];
  }



//Codewars
function differenceInAges(ages){
    return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
  }