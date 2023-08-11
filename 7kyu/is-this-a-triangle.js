// DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


//My Solution
//P: always 3 num, always a num, not always positive, whole, never empty, always > 0
//R: boolean if is a triangle
//E: 1,2,2 => true
//   7,2,2 => false
//   5,5,9 => true
function isTriangle(a,b,c){
    //if the sum of 2 sides > 3 return true else false
    return a+b > c && a+c > b && c+b > a ? true : false
}


//CodeWars
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

