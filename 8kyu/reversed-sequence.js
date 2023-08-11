// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
const reverseSeqE = n => {
    return [];
  };


  //My Solution
  //P: only one num, whole number, positive, always num, never 0
  //R: Array, sequence num, whole num, integers reverse order
  const reverseSeq = n => {
    //store num in new array
    let numToArray = []
    //loop down the num to 1 
    for (let i = n; i > 0; i--){
         //put num to new array
        numToArray.push(i)
    }   
    return numToArray
  };

  //E:
  console.log(reverseSeq(3), [3,2,1])
  console.log(reverseSeq(10), [10,9,8,7,6,5,4,3,2,1])
  console.log(reverseSeq(5), [5,4,3,2,1])


//CodeWars Best practice

const reverseSeqA = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};


//CodeWars
const reverseSeqB = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };
//   Array(n) creates an array with n number of empty spots. Ex: Array(5): [ undefined, undefined, undefined, undefined, undefined ].
//   Then fill(0), the fill() method changes all elements in an array to a static value(MDN Web docs). Ex: fill(0) = [0, 0, 0, 0, 0].
//   Finally .map takes each element of the array and runs a provided function on each element. Ex: [0, 0, 0, 0, 0].map( ( e, i ) => n-i ); equals to [5,4,3,2,1].