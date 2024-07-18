// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n > 0.


//P:number, always positive and always more than 0
//R: Array with numbers from n to 1
//E: n=5 --> [5,4,3,2,1]
//E: 3 => [3,2,1]
//P: fill array with n numbers then change number to index + 1 then reverse order


const reverseSeq = n => {
    return Array.from({length: n}).fill(0).map((e,i)=> e + (i+1)).reverse();
  };


  const reverseSeqA = n => {
    //store num in new array
    let numToArray = []
    //loop down the num to 1 
    for (let i = n; i > 0; i--){
         //put num to new array
        numToArray.push(i)
    }   
    return numToArray
  };


//CodeWars Best practice

const reverseSeqB = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};


//CodeWars
const reverseSeqC = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };
//   Array(n) creates an array with n number of empty spots. Ex: Array(5): [ undefined, undefined, undefined, undefined, undefined ].
//   Then fill(0), the fill() method changes all elements in an array to a static value(MDN Web docs). Ex: fill(0) = [0, 0, 0, 0, 0].
//   Finally .map takes each element of the array and runs a provided function on each element. Ex: [0, 0, 0, 0, 0].map( ( e, i ) => n-i ); equals to [5,4,3,2,1].