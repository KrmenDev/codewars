// Description:

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
// Example:

// arguments: 1, 2, "&"
// should return "unknown value"




// three arguments, two numbers, n1, n2 and a symbol, or sign
// return the operation asked, or "unknown value"
// arguments: 1, 2, "+"
// should return 3
// arguments: 1, "k", "*"
// should return "unknown value"
//take n1, n2 and do what sign says if not a operation symbol return "unknown value"


  function calculator(a,b,sign){
    if(typeof a === 'number' && typeof b === 'number'){
    switch(sign){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return a % b;
        }
    }
    return "unknown value" 
  }


//Codewars
function calculator(a,b,sign){
	if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}



//Codewars
function calculator(a,b,sign){
	var oper = {
		"+": a + b,
		"-": a - b,
		"*": a * b,
		"/": a / b
	}
	return oper[sign] ? oper[sign] : "unknown value"
}



//Codewars
function calculator(a,b,sign){
    if(sign != "+" && sign != "-" && sign != "*" && sign != "/") return "unknown value";
    if(isNaN(a) || isNaN(b)) return "unknown value";
    if(sign == "+") return a+b;
    if(sign == "-") return a-b;
    if(sign == "*") return a*b;
    if(sign == "/") return a/b;
}