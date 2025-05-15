// Description:

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.
// Examples (input --> output)

// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

//number, always positive, never empty
// return a number of how many divisors
//1 => 1
//10 => 4
//11 => 2
//54 => 8
//loop num if modulos == 0
//return 1 to divisorCount

function getDivisorsCnt(n){
    let divisorCount = 0
    const sqrtN = Math.sqrt(n)

    for(let i = 1; i <= sqrtN; i++){
      if(n % i === 0){
        divisorCount += (i === n/i) ? 1 : 2
        //If i equals n / i (i.e., i*i == n), it's a perfect square, so we count only once.
      }
    }
    return divisorCount
}




//Codewars
function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}



//Codewars
function getDivisorsCnt(n){
    var res=[], sqrt=Math.sqrt(n);
    for(let i=1; i<=sqrt; ++i){
      if(n%i==0){res.push(i); res.push(n/i);}
    }
    res = Array.from(new Set(res));
    return res.length;
}



//Codewars
function getDivisorsCnt(n) {
  let count = 0
  if (n % Math.sqrt(n) == 0) {
    count++
  }
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      count += 2
    }
  }
  return count
}