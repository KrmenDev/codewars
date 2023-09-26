// Description:

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"


//My Solution


//P: Always an array, never empty, string, numbers
//R: String with commas after each element
//E: [2,4,5,2] => "2,4,5,2"
//E: [hola] =>  "h,o,l,a"
//P: array to string then split and join

function printArray(array){
   return array.toString().split(',').join()
  }




//CodeWars
  function printArray(array){
    return array.join();
  }



  
//CodeWars
function printArray(array){
    return array.toString();
  }