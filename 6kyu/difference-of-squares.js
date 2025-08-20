// Task

// Given an integer n, return a pair of integers (x, y) such that x ^ 2 - y ^ 2 = n.

// If there is no solution, return a "null value", according to your language (more info in the initial solution).
// Input Constraints

// -2 ^ 128 < n < 2 ^ 128

// Examples

//  1 -> (1, 0) // 1 - 0 = 1
//  2 -> null 
// -3 -> (1, 2) // 1 - 4 = -3
//  4 -> (2, 0) // 4 - 0 = 4
// -5 -> (2, 3) // 4 - 9 = -5


//number, can be positive or negative, never empty
//return two numbers such that x ^ 2 - y ^ 2 = n
// -3 -> (1, 2) // 1 - 4 = -3
//  4 -> (2, 0) // 4 - 0 = 4
// -5 -> (2, 3) // 4 - 9 = -5


//Codewars
function squares(n) {
  
  let res = null
  ,   abs = n < 0n ? -n : n;
  
  if (abs % 2n)
    res = [ abs / 2n + 1n, abs / 2n ];
  else if (abs % 4n === 0n)
    res = [ abs / 4n + 1n, abs / 4n - 1n ];

  if (res && n < 0n)
    res.reverse();

  return res;
  
}


//Codewars
const squares = n => n % 4n ? n % 2n ? [(n + 1n) / 2n, (n - 1n) / 2n] : null : [n / 4n + 1n, n / 4n - 1n]


//Codewars
function factors(n) {
  if (n === 2n) {
    return null
  }
  if (n%2n === 0n) {
    if (n%4n === 0n) {
      return [2n, n/2n]
    }
    return null
  }
  return [1n, n]
}

function squares(n) {
  if (n < 0n) {
    const r = squares(-n)
    return r && r.reverse()
  }
  if (n === 1n) {
    return [1n, 0n]
  }
  
  const fs = factors(n)
  if (fs) {
    const [a, b] = fs
    const x = (b + a) / 2n
    const y = (b - a) / 2n
    return [x, y]
  }
  return null
}