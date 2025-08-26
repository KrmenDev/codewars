// Description:

// Write a function that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the condition

// 0 <= a <= b <= n

// The pairs should be sorted by increasing values of a, then by increasing values of b.

// For example,

// for input: 2
// it should return: [  [0, 0], [0, 1], [0, 2],  [1, 1], [1, 2],  [2, 2]  ]


//integer always positive, always valid
//return nested arrays with pair of nums with increasing values of a, then by increasing values of b
//loop until n as a and b
//push result of a,b in arr


function generatePairs(n) {
    let res = []

    for(let a = 0; a <= n; a++){
        for(let b = a; b <= n; b++){
            res.push([a,b])
        }
    }
    return res
}




//Codewars
function generatePairs(n) {
  var result = [];
  for(i =0 ; i <= n ; i++){
    for(j = i ; j <= n ; j++){
        result.push([i, j]);
    }
  }
  return result;
}


//Codewars
const generatePairs = (n, a = 0) => a > n ? [] : Array.from({length: n-a+1}, (_, i) => [a, a+i]).concat(generatePairs(n, a+1));