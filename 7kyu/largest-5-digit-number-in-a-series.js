// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. 
// The number passed may be as large as 1000 digits. 


//large digit number, always positive, always valid
//return the highest 5 consecutive nums
//283910 => 91
//1234567890 => 67890
//if the num is less than 6 digits return the highest consecutive num
//check the last 5 digits if consecutive return 

function solution(digits){
    let res = 0

    for(let i = 0; i < digits.length; i++){
        let num = digits.substr(i, 5) 
        //each loop iteration pulls next 5 digits into a substring
        if(Number(num) > res){
            res = Number(num)
        }
    }
    return res
}



//Codewars
function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}



//Codewars
function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}



//Codewars
function solution(digits){
  if (digits.length <= 5) return digits;
  
  let largestFiveDigitNumber = digits.slice(0, 5);
  for (let i = 5; i < digits.length; i++) {
    let currentFiveDigitNumber = digits.slice(i, i + 5);
    if (currentFiveDigitNumber > largestFiveDigitNumber) {
      largestFiveDigitNumber = currentFiveDigitNumber; 
    }
  }
  return Number(largestFiveDigitNumber);
}



//Codewars
function solution(digits){
  return +digits.split('').map((v,i,arr)=>arr.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
}