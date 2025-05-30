// Task

// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
// Series:1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...

// You will need to figure out the rule of the series to complete this.
// Rules

//You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return "0.00".

//     You will only be given Natural Numbers as arguments.

//1/4 = 0.25
//1/7 = 0.14
//1/10 = 0.1
//1/13 = 0.07
//1/16 = 0.06

//n => number that is the sequence we need to add
//Always positive, can be zero, always an integer
// return sum as string with two digits only
//// Examples
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
//use a loop and add 3 to each step that divides fraction


function SeriesSum(n) {
    let result = 0
    for(let i = 0; i < n; i++){
        result += 1 / (1 + 3 * i)
    }
    return result.toFixed(2)
}




//Codewars
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}



//Codewars
function SeriesSum(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}



//Codewars
function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}


//Codewars
function SeriesSum(n)
{
  for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}
