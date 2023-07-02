// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//My Solution
function solution(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString ;
}
solution ('world');


//CodeWars Best
function solution(str){
    return str.split('').reverse().join('');  
  }