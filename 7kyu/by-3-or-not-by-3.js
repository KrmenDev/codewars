// Description:

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:


// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

// Try to avoid using the % (modulo) operator.


//str of nums, never empty, always positive
// true if nums divisible by 3
//'1' => false
//'88' => false
//'123' => true
// reduce all nums if / 3 == 0 return true else false

function divisibleByThree(str){
    return str.split('').reduce((acc,c) => acc + Number(c),0) % 3 === 0 ? true : false
}



//Codewars
function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
  }




//Codewars
function divisibleByThree(str){
    return str.split('').reduce((a,b) => parseInt(a) + parseInt(b)) % 3 === 0
  }



//Codewars
const divisibleByThree = (str) => {
    const num = [...str].reduce((a, b)=> +a + +b, 0)
    return parseInt(num/3) === num/3
  }



//Codewars
function divisibleByThree(str) {
    let s = 0;
    for (const c of str)
      s += parseInt(c);
    return s % 3 == 0;
  }