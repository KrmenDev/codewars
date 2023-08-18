// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle



//My Solution
//P: Always a number, whole num. always positive, never empty 
//R: a num, always positive
//E: (30, 60) = 90
//   (60, 60) = 60
//   (43, 78) = 59
//   (10, 20) = 150


function otherAngle(a, b) {
  //the sum of the 3 should be 180
    return 180 - (a + b)
  }


  //CodeWars
  const otherAngle = (a, b) => 180 - a - b


  //CodeWars
  function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
      return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
      return 0;
    return 180 - a - b; //return missing angle
  }