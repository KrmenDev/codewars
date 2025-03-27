// Description:

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


//two string integers can be empty, can contain letters and symbols
// return math result of sum if not num return 0
//4","5" => "9"
//"34","5" => "39"
// "", "" --> "0"
// "2", "" --> "2"
//if a or b not a num return 0 else sum a + b return and turn to string

function sumStr(a,b) {
    let sum = 0
  if(Number(a) == NaN && Number(b) == NaN){
    sum
  }else{
    sum = Number(a) + Number(b) 
  }
  return String(sum)
}


//Codewars
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }



//Codewars
function sumStr(a,b) {
    return (+a+ +b)+''  
  }



//Codewars
function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
  }