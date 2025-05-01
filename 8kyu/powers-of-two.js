// Description:

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]



//Non negative numbers, whole nums
//return arr of nums 0 to num
//0 => [1]
//1 => [1,2]
//4 => [1,2,4,8,16]
//num * 2
//add 1 to n nums to arr
//then multiply * 2


function powersOfTwo(n){
    return Array.from({length: n + 1}, (_, i) => 2 ** i)
  }




//Codewars
function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }


  

//Codewars
function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }




//Codewars
function powersOfTwo(n){
    var arr = [];
    
    for (var i=0; i<=n; ++i){
      arr.push(Math.pow(2, i));
    }
    
    return arr;
  }