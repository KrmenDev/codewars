// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



//My Solution

//P: alway arrays, always numbers, never string, never empty, no symbols
//R: An integer of the sum of the two arrays
//E: 
//// [1, 2, 3], [4, 5, 6]) => 21
/// [-1, -2, -3], [-4, -5, -6]) => -21
/// [100, 200, 300], [400, 500, 600]) => 2100
//P: sum all elemnts of each array then sum them
//return sum

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, c) => acc +c) + arr2.reduce((acc, c) => acc +c);
  }



//CodeWars
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }

  

//CodeWars
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }