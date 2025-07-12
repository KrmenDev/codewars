// Description:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)


//number, always positive, never empty
//return the number of multiplication pairs until one digit num
//39 => 3
//4 => 0
//25 => 2
//999 => 4
//split num and multiply each num, do it while the res is > 9 count how many times the loop runs


function persistence(num) {
   let res = num.toString().split('').reduce((acc,c) => acc * Number(c))
   let loopCount = 0

   if(num <= 9){
    return 0
   }else{

    while(res > 9){
        res = res.toString().split('').reduce((acc,c) => acc * Number(c))
        loopCount++
    }
   }

   return loopCount + 1
}




//Codewars
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}




//Codewars
function persistence(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}



//Codewars
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}