// Description:

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//arr of elements, can be numbers, booleans or strings
//return arr same order ust all zeros to the end
//[1,2,0,1,0,1,0,3,0,1] => [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
//map the arr if element is not a zero return it if is a zero push it to the arr
//filter the arr of zeros to a new arr
//add all zeros to the end

function moveZeros(arr) {
    let zeros = []
    let array = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0 || arr[i] === false || arr[i] != []){
            array.push(arr[i])
        }else if(arr[i] === 0 ){
            zeros.push(arr[i])
        }
    }
    return array.concat(zeros)

}



//Codewars
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}



//Codewars
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}


//Codewars
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}