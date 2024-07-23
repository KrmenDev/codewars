// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//My Solution

//P: Always an array, string, numbers, never empty
//R: Array with elements
//E:
///['Hello', 'Goodbye', 'Hello Again'] =>['Hello', 'Hello Again']
/// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [1, 3, 5, 7, 9]
//P: filter elements if they are even (%) return array with only odd index

function removeEveryOther(arr){
  return arr.filter((e,i) => i % 2 === 0 )
}


function removeEveryOther(arr){
    return arr.filter(function(e, i){
        if(i % 2 === 0){
            return e
        }
    })
}


//CodeWars
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }



//CodeWars
function removeEveryOther(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }



//CodeWars
function removeEveryOther(arr){
    //your code here
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
  }