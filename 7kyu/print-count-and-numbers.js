// Description:

// Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

// Example: "1123"

//     Here 1 comes twice so <count><integer> will be "21"
//     then 2 comes once so <count><integer> will be "12"
//     then 3 comes once so <count><integer> will be "13"

// hence output string will be "211213".

// Similarly "211213" will return "1221121113" (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

// Return "" for empty, nil or non numeric strings




//string of numbers, can be empty
//return the count of numbers
//'1' => '11'
//'11' => '21'
//'a' => ''
//'' => ''
//'12a' => ''
//'1211' => '11 12 21'
//check with a loop if next char is the same as first
//return count of num followed by num


//why Im getting '21111213' instead of '211213' as a result of this function data = '1123'

function countMe(data) {

    const regex = /[a-zA-Z]/;
    let str = '';

    if(data == '' || regex.test(data)){return str}

    for(let i = 0; i < data.length; i++){
        let count = 1

        // Count all consecutive matching characters
        while(i + 1 < data.length && data[i] === data[i+1]){
            count++
            i++ // Skip already-counted character
        }
        str += count + data[i]
    }
    return str
}

//Codewars
function countMe(s) {
  return /[^0-9]/.test(s) ? '' : s.replace(/(.)\1*/g, (n, m) => n.length + m);
}


//Codewars
function countMe(data){
  //your code here
  let res = "";
  let count = 1;
  let num = data[0];
  
  for (let i = 1; i < data.length; i++) {
      if (num === data[i]) {
          count ++;
      } else {
          if (!isNaN(num)) {
            res += `${count}${num}`;  
          } else {
            return '';
          }
          count = 1;
          num = data[i]
      }
  }
  if (!isNaN(num)) {
    res += `${count}${num}`;  
  } else {
    return '';
  }
  
  return res;
}