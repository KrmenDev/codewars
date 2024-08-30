// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.



//My Solution

//P: always a number, always an array, never a letter, never a symbol, always more than 2 num
//R: return a number of the avarage of array
//E:
/// [2,2,2,2] => 2
/// [1,2,3,4,5] => 3
/// [1,1,1,1,1,1,1,2] => 1
//P: sum the num in array (reduce) divided by its length 
// return round down num

function getAverage(marks){
  return Math.floor(marks.reduce((acc, c) => acc + c, 0)/marks.length)
}



//CodeWars
function getAverage(marks){

  // calculates total number of marks
  var total = 0;
  for(var i = 0; i < marks.length; i++){
    total += marks[i];
  }
  
  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
  return Math.floor(total / marks.length);
}
  



//CodeWars
function getAverage(marks){
    var sum = 0;
    
    for (var i in marks)
      sum += marks[i];
    
    return parseInt(sum / marks.length);
  }