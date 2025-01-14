// // Definition

// // A Tidy number is a number whose digits are in non-decreasing order.
// // Task

// // Given a number, Find if it is Tidy or not . 

// Notes

//     Number passed is always Positive .

//     Return the result as a Boolean

//     Input >> Output Examples

// tidyNumber (12) ==> return (true)

// Explanation:

// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .


//integers, always positive, never empty
//return boolean
// 12 => true
//102 => false
//2335 => true
//2789 => true
//pass the number to string check if the next is higher than the prev, return boolean


  function tidyNumber(n){
    let str = n.toString()
    for(let i = 0; i <= str.length -1; i++){
        if(str[i] > str[i+1]){
            return false
        }
    }
    return true
  }


  //Codewars
  const tidyNumber = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
      if (s[i] > s[i+1]) return false;
    }
    return true;
  }


//Codewars
function tidyNumber(n){
    return [...n+=""].sort().join``==n
  }


//Codewars
function tidyNumber(n){
    let arr = [...n.toString()].map(Number);
    return arr.every((el, ind, arr) => !ind || el >= arr[ind - 1]);
  }