// Description:

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// "312" should return "333122"

// "102269" should return "12222666666999999999"

//string numbers, always positive, never empty
//return string with numbers
//repeat string depending on number
// split string change str to num
// repeat num join

function explode(s) {
    return s.split('').map((e) => e === 0 ? '': e.repeat(Number(e))).join('')
  }


//Codewars
function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
  }


//Codewars
function explode(s) {
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
      for (let num = s[i]; num > 0; num--) {
        newStr += s[i]
      }
    }
    return newStr
  }


//Codewars
function explode(s) {
    let arr = [];
    let split = s.split("");
    for (let item of s) {
      if (item == "1") {
        arr.push("1");
      } else if (item == "2") {
        arr.push("22");
      } else if (item == "3") {
        arr.push("333");
      } else if (item == "4") {
        arr.push("4444");
      } else if (item == "5") {
        arr.push("55555");
      } else if (item == "6") {
        arr.push("666666");
      } else if (item == "7") {
        arr.push("7777777");
      } else if (item == "8") {
        arr.push("88888888");
      } else if (item == "9") {
        arr.push("999999999");
      }
    }
    return arr.join("");
  }
