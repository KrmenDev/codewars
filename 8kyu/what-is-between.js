// Description:

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


//numbers, can be positive and negative, a always < b
//return an arr with numbers between a and b
//-2, 2 => [-2, -1, 0, 1, 2] 
//1,3 => [1,2,3]
//loop to add to arr from a to b


function between(a, b) {
    let arr = []
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr
  }



//Codewars
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);


//Codewars
function between(a, b) {  
    const betweenArray = []
    
    while (a <= b) {
      betweenArray.push(a);
      a++;
    }
    
    return betweenArray;
  }


//Codewars
const between = (a, b) =>
    [...Array(b - a + 1)].map((_, idx) => idx + a);