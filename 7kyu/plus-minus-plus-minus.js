// Description:

// Count how often sign changes in array.
// result

// number from 0 to ... . Empty array returns 0
// example

// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;


//array of numbers can be positive and negative, can include zero or be empty
//return how many times the numbers change signs
//[] => 0
//[1,2,3] => 0
//[1,-3,-4,0,5] => 2
//create a count variable
//use loop to check if the element is negative and next positive or 0 orr if is negative or zero and next positive add 1 to count

function catchSignChange(arr) {
  let count = 0
  
  for(let i = 0; i < arr.length; i++){
    if((arr[i] < 0 && arr[i+1] >= 0) || (arr[i] >= 0 && arr[i+1] < 0)){
      count++
    }
  }
  return count
}


//Codewars
const catchSignChange = function(arr){
  var count = 0;

  for (i = 0; i < arr.length; i++){
    if ((arr[i] < 0 && arr[i+1] >= 0) || (arr[i] >= 0 && arr[i+1] < 0)){
        count++;
    }
  };
  return count;
};



//Codewars
function catchSignChange(arr) {
  return arr.slice(1).filter((e,i)=>(e<0)!==(arr[i]<0)).length;
}



//Codewars
function catchSignChange( arr ){
  if(arr.length === 0){ return 0 }
  let sign = arr[0] < 0 ? -1 : 1
  let count = 0
  for ( let i of arr){
    if (i > -1 === sign > -1){
      count += 0
    }else{
      count += 1
      sign *= -1
    }
  }
  return count
} 
