// // // Task

// // // Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// // // Notes

// // //     Array/list will contain positives only .
// // //     Array/list will always have even size

// // Input >> Output Examples

// // minSum({5,4,2,3}) ==> return (22) 

// // Explanation:

// //     The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

// // minSum({12,6,10,26,3,24}) ==> return (342)

// Explanation:

//     The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

// minSum({9,2,8,7,5,4,0,6}) ==> return (74)

// Explanation:

//     The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74



// arr of nums always even always positive
// the sum of multiplying pairs highest lowest
//[5,4,2,3] => 22
//[5,4,3,2] => 22 (5*2 + 3*4 = 22)
//[12,6,10,26,3,24] ==> 342
//[26,24,12,10,6,3] => 26*3 + 24*6 + 12*10 = 342

//sort arr 
//miltiply each pair only if they are not repeated nums
//reduce new arr and return



  function minSum(arr) {
    return arr.sort((a,b) => a - b).slice(0, arr.length/2).reduce((acc,c,i) => acc += curr * arr[arr.length - i - 1], 0)
  }


//Codewars
function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }


//Codewars
const minSum = arr =>
    arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);


//Codewars
function minSum(arr) {
    arr = arr.sort(function (a, b) {return a - b});
    let i = 0;
    let j = arr.length - 1;
    let sum = 0;
    while (i < j ) {
      sum += arr[i] * arr[j];
      i++;
      j--;
    }
    return sum;
  }