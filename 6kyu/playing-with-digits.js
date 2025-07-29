// Description:

// Some numbers have funny properties. For example:

//     89 --> 8¹ + 9² = 89 * 1
//     695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//     46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
// (ap+bp+1+cp+2+dp+3+...)=n∗k(a^p + b^{p + 1} + c^{p + 2} + d^{p + 3} + ...) = n * k(ap+bp+1+cp+2+dp+3+...)=n∗k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.
// Examples:

// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51



//two integers, always positive
//return 'k' => -1 or the number if it exist that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
//raise all n digits to the powert starting on p
//sum them all = k
//so we divide k by n
//separate n into digits with split
//use a loop to Math.pow(i=p) and add 1 to i each loop
//reduce the result and that is = k
//divide k by n if positive num return else -1


function digPow(n, p){

  let nums = n.toString().split('').map((e) => Number(e))

    k = nums.map((num, i)=>{
        let power = p 
        return Math.pow(num, power + i)})
        .reduce((acc, c) => acc + c, 0)

    let res = Math.floor(k / n)

    return n * (res) === k ? res : -1
}




//Codewars
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}



//Codewars
function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}



//Codewars
function digPow(n, p){
  var ans = n.toString().split('')
             .map((v,i) => Math.pow(parseInt(v), i+p))
             .reduce((a,b) => a+b) / n;
  return ans%1 == 0 ? ans : -1;
}