// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5


// two numbers, always positive a always first b second, operator is a string
//return num 
//1, 2, "add" => 3
//8,2, "divide" => 4
//5,2, "multily" => 10
//if operator == "add" change to +
//return operation

function arithmetic(a, b, operator){
  if(operator == "add"){
    return a + b
  }else if(operator == "subtract"){
    return a - b
  }else if(operator == "divide"){
    return a / b
  }else if(operator == "multiply"){
    return a * b
  }
}


function arithmetic(a, b, operator){
 return operator == "add" ? a + b : operator == "subtract" ? a - b : operator == "divide" ? a / b : operator == "multiply" ? a * b : 'not a valid operation'
}



//Codewars
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}



//Codewars
const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);



//Codewars
function arithmetic(a, b, operator){
  optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b); 
}