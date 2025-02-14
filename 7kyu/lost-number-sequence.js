// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

//     The starting array sequence is [1,2,3,4,5,6,7,8,9]
//     The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
//     Your function should return the int 5.

// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).


//Arr of nums, can be empty, more than one num, always positive
//num missing in sequence
//[1,2,3,4,5], [3,4,1,5] => 2, 'Deletion'
//[1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8] => 5, 'Deletion'
//[1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3] => 0, 'No deletion'
//use filter to see if arr includes all nums

function findDeletedNumber(arr, mixArr) {
    return Number(arr.filter((num) => !mixArr.includes(num)))
  }


  
//Codewars
function findDeletedNumber(arr, mixArr) {
    let arrSum = arr.reduce((a,b) => a + b, 0)
    let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
    return arrSum - mixArrSum
  }




//Codewars
function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  }




//Codewars
function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) return 0;
    for(var k in arr)
      if(mixArr.indexOf(arr[k]) === -1)
        return arr[k];
    return 0;
  }



//Codewars
function findDeletedNumber(arr, mixArr) {
    return arr.find ((element) => {return !mixArr.includes (element)}) || 0;
  }