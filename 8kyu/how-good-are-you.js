// DESCRIPTION:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


//P: numbers, positives, never empty
//R: True if youPoints is higher than class Points
//E:[2, 3], 5 => True
//E: [12, 23, 34, 45, 56, 67, 78, 89, 90], 9 => false
//P: add all class points and divide by its length, if the result is higher than yourPoints return false else true

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc,c) => (acc + c)) /classPoints.length < yourPoints ? true : false
  }


  //My Solution
  function betterThanAverage(classPoints, yourPoints) {
   let average = classPoints.reduce((acc,c)=> acc+c)/classPoints.length
    return yourPoints > average ? true : false
  }


//CodeWars Best
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}


//Codewars
function betterThanAverage(classPoints, yourPoints) {
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}