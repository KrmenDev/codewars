// Description:

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.
// Examples:

// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

// Note that 121 has twice the digit 1.

// two integers n digit and d integer, can be zero, always positive
// return the number of nums of d that are the square nums from n to d
//5750, 0 => 4700
//25,1 => 11
//10, 1 => 4
//fill arr with square nums from 0 to n
//filter arr with nums with d in them
//count how many times does the same digit appears in arr


function nbDig(n, d) {
    let square = []
    for(let i = 0; i <= n; i++){
        square.push(i * i)
    }
    square.filter((num) => String(num).includes(String(d)))

    let count = 0
    for(const num of square){
        const numStr = String(num)
        for(const digit of numStr){
            if(parseInt(digit) === d){
                count ++
            }
        }
    }
    return count

}


//Codewars
function nbDig(n, d) {
var res=0;
    for (var g = 0;g <= n;g++){
      var square=(g * g + "").split("");
      square.forEach((s)=>s == d ? res++ : null)
    }return res;
}



//Codewars
function nbDig(n, d) {
  var o = '';
    for(var i = 0; i <= n; i++){
      o += Math.pow(i, 2);
    }
  return o.split(d).length-1
}



//Codewars
function nbDig(n, d) {
    let totalOfDigit = 0;
  
    for(let i = 0; i <= n; i++) {
      totalOfDigit += (i*i).toString().split('').filter(n => n == d).length;
    }
      
    return totalOfDigit;
}