// Description:

// You need to swap the head and the tail of the specified array:

// the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

// Return new array.

// For example:

//    [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//     \----/   \----/         
//      head     tail 




//array of numbers, can be positive or negative, length undefined
//return second half of arr firts and rest same order
//[ -1, 2 ]  => [ 2, -1 ] 
//[ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  
//grab middle of arr if length even do not grab
//slice arr from half and unshift all elements to beginning arr
//push middle element
//and push beginning of arr
//return new Arr


function swapHeadAndTail(arr) {
  
    let middleIndex 
    let noMiddle

    if(arr.length % 2 != 0){
        middleIndex = Math.floor(arr.length/2)
    }else{
        noMiddle = true
      
    }

    let head = arr.slice(0, middleIndex)
    let middle = arr[middleIndex]
    let tail = arr.slice(middleIndex+1)


    return noMiddle ? [arr.slice(arr.length/2), arr.slice(0, arr.length/2)].flat() : [tail,middle,head].flat()

}



//Codewars
const swapHeadAndTail = (arr, mid = arr.length / 2) => [
  ...arr.slice(-mid),
  ...arr.slice(mid, -mid), 
  ...arr.slice(0, mid)
];




//Codewars
const swapHeadAndTail = (array) => {
    let l = array.length;
    let r = Math.round(l / 2);
    let f = Math.floor(l / 2);
    let a = array.splice(0, f);
    let b = array.splice(r - f);
    return b.concat(array, a);
}



//Codewars
const swapHeadAndTail = arr =>
  (val => [...arr.slice(-val), ...arr.slice(val, -val), ...arr.slice(0, val)])
  (arr.length / 2);



//Codewars
function swapHeadAndTail(arr) {
  const midIndex = Math.floor(arr.length / 2)
  if (arr.length % 2) return [...arr.slice(midIndex + 1), arr[midIndex], ...arr.slice(0, midIndex)]
  else return [...arr.slice(midIndex), ...arr.slice(0, midIndex)]
}