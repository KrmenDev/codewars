// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//P: integers, positive never empty 
//R: the result of multiplying all integers
//E: [1,2,3] => 6
//E: [4,1,1,1,4] => 16
//E: [2, 2, 2, 2, 2, 2] => 64
//P: maybe use reduce to end up with the result

function grow(x){
  return x.reduce((acc, c) => acc * c, 1)
}


//CodeWars Best Practice
const grow = x => x.reduce((a,b) => a*b);



//CodeWars
const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };