// Description:
// Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


//My Solution


//P: two numbers, smallest to bigest, can be positve or negative, whole, always numbers
//R: return num between start end expect with a 5 in it
//E: 1,9 => 8
//E: 4,17 => 12
//P: count how many numbers are from start to end
//P: create a list starting from num start and ends with end
//P: loop




function dontGiveMeFive(start, end){
    let result = 0
    for(let i = start; i <= end; i++){
        if(String(i).indexOf('5') === -1){
            result++
        } 
}
    return result
   
}
   




//CodeWars
function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }




//CodeWars
function dontGiveMeFive(start, end)
{
  // HELLO STREAMERS!
  //P: positive or negative number; 'start' and 'end'; inclusive
  //R: positive integer = count of numbers
  //E: dontGiveMeFive(4, 17) -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
  //P: 
  //create variable holding count total
  //create loop, from 'start' to 'end', use <= because it's inclusive
  //if (number DOESN'T have a 5 in it), {add one to 'count'}
      //number doesn't have to remain a number, so can convert to String and use indexOf()
      //indexOf() returns -1 if the character is not present,
      //therefore we WANT a -1 value if '5' is not found in the string
  let count = 0;
    
  for(let i = start; i <= end; i++) {
    if(String(i).indexOf('5') === -1) {
      count++;
    }
  }
  return count;
}

