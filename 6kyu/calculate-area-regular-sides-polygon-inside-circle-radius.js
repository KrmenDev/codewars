// Description:

// Write the following function:

// function areaOfPolygonInsideCircle(circleRadius, numberOfSides)

// It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle).


//How to calculate the area of a regular polygon of having the number of sides inside a circle of radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle).

// The answer should be a number rounded to 3 decimal places.

// Input :: Output Examples

// areaOfPolygonInsideCircle(3, 3) // returns 11.691

// areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

// areaOfPolygonInsideCircle(4, 5) // returns 38.042

// Note: if you need to use Pi in your code, use the native value of your language unless stated otherwise.


//the formula is
//(1/2) * (numberOfSides) * circleRadius ** 2 * Math.sin(2Math.pi()/numberOfSides)

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const area = 0.5 * numberOfSides 
  * Math.pow(circleRadius,2) 
  * Math.sin((2 * Math.PI) / numberOfSides)

  return Number(area.toFixed(3))
}




//Codewars
function areaOfPolygonInsideCircle(r, s) {
  let angle = Math.PI / s
  let area = r * r * s * Math.sin(angle * 2) / 2
  return +area.toFixed(3)
}



//Codewars
areaOfPolygonInsideCircle=(a,b)=>Math.round((a*a*Math.sin(2/b*Math.PI)/2)*b*1e3)/1e3


//Codewars
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const angle = Math.PI * 2 / numberOfSides;
  return numberOfSides / 2 * circleRadius ** 2 * Math.sin(angle);
}