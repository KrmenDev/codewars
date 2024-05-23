// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//P: array of numbers, positive maybe negative
//R: Boolean true if the numbers in a are below or equal to limit else false
//E: [66, 101], 200) => true
//E: [78, 117, 110, 99, 104, 117, 107, 115], 100 => false
//E: 101, 45, 75, 105, 99, 107], 107) => true
//P: Check all numbers in array if any is higher than limit return false else true



function smallEnough(a, limit){
    let higher = a.filter((num) => num > limit)
    return higher.length >= 1 ? false : true
}


//codewars
function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}

//codewars
function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }