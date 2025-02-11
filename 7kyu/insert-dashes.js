// Description:

// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.


//integers, always positive, can have 0
//string of nums adding a dash after each two odd nums
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
// 86420 ---> "86420"
// pass nums to arr
// if two odd nums add a '-'
//


function insertDash(num) {
    let func = num => Number(num)
    let arr = Array.from(String(num),func)
    return arr.map((num, i) => i < arr.length - 1 && num % 2 != 0 && arr[i+1] % 2 != 0 ? num + '-' : num).join('')
 }
 


//Codewars
function insertDash(num) {
    //code me
  num = num.toString().split('')
   
   for(let i = 0; i < num.length; i++){
     if (num[i]%2 > 0 && num[i +1]%2 > 0){
       num[i] = num[i] + '-'
     }
   }
  
   return num.join('')
   
 }



//Codewars
function insertDash(num) {
    return num.toString().split('').reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + '-';
      
      return acc + c;
    }, '');
 }



//Codewars
function insertDash(num) {
    var s = num + '', output = '';
    for (var i = 0; i < s.length; i++) { output += s[i] + (s[i] % 2 * s[i+1] % 2 ? '-' : '') }
    return output;
 }
