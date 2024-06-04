// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.



//P: array of numbers, positive, negative can be duplicated
//R: number with the most digits
//E: [1, 10, 100] => 100
//E: [8, 900, 500] => 900
//E: [100, 200, 30] => 100
//P: sort array highest to lowest filter the highest length number



function findLongest(array){
    return array.reduce((largest, current) =>
        (current.toString().length > largest.toString().length ? current : largest), array[0]);
      }



//Codewars
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
  