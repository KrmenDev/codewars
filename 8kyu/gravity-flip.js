// Description:

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+

// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.



//My solution

//P: array numbers, whole, never empty, more than 3, never negative
//R: Array ordered nums
//E: * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
//E:  * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
//P: Arrange the nums in array -> a depending on the direction of -> d
//P: if R ascending order else descending



const flip = (d, a)=> {
  return d === 'R' ? a.sort((a,b) => a - b) : a.sort((a,b) => b - a) 
}




//CodeWars
const flip2 = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);



//CodeWars
const flip3=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
  }


  
//Codewars
  const flip4 = (d, a) =>
    a.sort((a, b) => d === `R` ? a - b : b - a);