// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.


//array numbers and strings
// sum all numbs and substract all string nums
//add all string nums in variable
//reduce arr nums
//substract variable to arr

function divCon(x){
    let substract = x.filter((num) => typeof num === 'string').map((e) => Number(e)).reduce((acc,c) => acc + c,0)
    let positive = x.filter((num) => typeof num === 'number').reduce((acc,c) => acc + c,0)

    return positive - substract
}



//Codewars
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }




//Codewars
function divCon(x){
    let numValue = 0;
    let strValue = 0;
    
    for(let i = 0; i < x.length; i++) {
      if(typeof(x[i]) === 'string' ) {
        strValue += parseFloat(x[i]);
      } else if(typeof(x[i]) === 'number' ) {
        numValue += x[i];
      }
    }
    return numValue - strValue;
  }


//Codewars
function divCon(x){
    const strings = x.filter(n => typeof n === 'string')
    const nums = x.filter(n => typeof n === 'number')
    
    const strSum = strings.reduce((acc, str) => acc += +str, 0)
    const numSum = nums.reduce((acc, str) => acc += str, 0)
  
    return numSum - strSum
  }