// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.




//arr numbers, can be empty, positive and negative, can have strings
// return the sum of odd nums cubing initial integers
//[-3,-2,2,3] => 0
//[1, 2, 3, 4] => 28
//["a",12,9,"z",42] => undefined
// check if e is a string or number
//filter odd nums then sum the cube of num

function cubeOdd(arr) {
    let isNum = arr.every((e) => !isNaN(e))
    return isNum ? arr.filter((num) => num % 2).reduce((acc,c) => acc + (c*c*c), 0) : undefined
    }




//Codewars
let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
    }



//Codewars
function cubeOdd(arr) {
    var sum = 0;
    for (var i = 0; i <arr.length; i++){
      var cubed = (arr[i]*arr[i]*arr[i]);
      if (isNaN(cubed)) return undefined;
      if(cubed % 2 != 0 )sum += cubed;
    }
    return sum;
  }



//Codewars
function cubeOdd(arr) {
	arr = arr.filter((num) => {return num % 2 != 0});
    arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
    return isNaN(arr) ? undefined : arr;
}