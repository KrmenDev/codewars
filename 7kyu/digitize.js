// Description:

// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]


//number, always positive, never empty
//arr of that number individual digits
//1230 => [1,2,3,0]
//num to string then split

function digitize(n) {
    return n.toString().split('').map((e) => +e)
}



//Codewars
function digitize(n) {
    return String(n).split('').map(Number);
  }


//Codewars
function digitize(n) {
    return n.toString().split('').map(Number);
  }


//Codewars
function digitize(n){
    let string = String(n);
    let arr = [];
    for(let i = 0; i < string.length; i++){
      arr.push(Number(string[i]))
    }
    return arr
  }