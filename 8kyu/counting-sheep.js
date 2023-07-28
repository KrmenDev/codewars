// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//Solution
var countSheep = function (num){
   let sheep = ''
   for(let i = 1; i <= num; i++){
    sheep += `${i} sheep...`
   }
   return sheep
  }


  //CodeWars
  var countSheep = function (num){
   let str = "";
   for(let i = 1; i <= num; i++){
       str += `${i} sheep...`; 
      }
   return str;
 }

 //codeWars
 countSheep = n => [...Array(n).keys()].map(x =>`${x+1} sheep...`).join``
//countSheep(2)
//...Array(n) creates [undefine, undefine] - .keys(0,1,2) - map adds 1 + the string sheep...

//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
