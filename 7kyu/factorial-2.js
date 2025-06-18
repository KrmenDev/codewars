// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

//number, always positive, always valid
//return 
//0 => 1
//1 => 1
//7 => 5040


function factorial(n){
  return n <= 1 ? 1 : n * factorial(n - 1);
}



//Codewars
function factorial(n){
  return n <= 1 ? 1 : n * factorial(n - 1);
}


//Codewars
function factorial(n){
  let answer = 1;
  
  while (n > 0) {
    answer *= n;
    n--;
  }
  
  return answer;
}


//Codewars
function factorial(n){
 let sum = 1;
  for (let i = 1; i <= n; i++){
    sum = sum * i;
  }
  return sum; 

}


//Codewars
function factorial(n){
  return n ? n * factorial(n-1) : 1;
}