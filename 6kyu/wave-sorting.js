// A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).

// Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

// The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4

// Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.

// Note:

//     The resulting array shouldn't necessarily match anyone in the tests, a function just checks if the array is now wave sorted.


//array sorted, always positive nums
//return true if arr is waved sorted
//[1,2,3,4] => false
//[4,1,7,5,6,2,3] => true
//check if first element is higher than the second and the second lower than the next etc
//indexes even are higher than the next and odd lower than the next 

//Codewars
function ascending(a, b) {
	return a - b;
}
//sort the arr
function waveSort(arr) {
    //sort the function to avoid errors
  arr.sort(ascending);
  //loops on two steps
  for (var i = 0; i < arr.length - 1; i += 2) {
    //use destructuring assigment to swap two elements in arr
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}




//Codewars
function ascending(a, b) {
	return a - b;
}

function waveSort(arr) {
  arr.sort(ascending);
  for (var i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}



//Codewars
function waveSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i])
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    if (i < n - 1 && arr[i] < arr[i + 1])
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
}



//Codewars
function waveSort(arr){
  var t = arr.slice().sort((a,b)=> a - b);
  arr.forEach((_,i)=> arr[i] = i % 2 ? t.shift() : t.pop())
}



//Codewars
function waveSort(arr){
  var alt = 1;
  for(var i = 0; i<arr.length-1; i++){
    if(alt == 1){
      if(arr[i]<arr[i+1]){
       var temp = arr[i];
       arr[i] = arr[i+1];
       arr[i+1] = temp;
      }
    }else{
      if(arr[i]>arr[i+1]){
       var temp = arr[i];
       arr[i] = arr[i+1];
       arr[i+1] = temp;
      }
    }
    alt*=-1;
  }
  return arr;
}