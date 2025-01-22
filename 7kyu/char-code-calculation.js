// Description:

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^

// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

//string upperCase, never empty
// return the difference between total1 and total2
//turn char to ASCII code then add it to total1
//replace all 7 with 1 and add to total2
//reduce each and return the difference


function calc(x){
    let total1 = x.split('').map((char) => char.charCodeAt(0)).join('').split('').reduce((acc,c) => Number(acc) + Number(c), 0)
    let total2 = x.split('').map((char) => char.charCodeAt(0)).join('').replaceAll('7', '1').split('').reduce((acc,c) => Number(acc) + Number(c), 0)
    return total1 - total2
}



//Codewars
function calc(x){
    let sum = n => [...n].reduce((a,b) => +a + +b);
    let total1 = x.replace(/./g, x => x.charCodeAt(0));
    let total2 = total1.replace(/7/g,'1');
    return sum(total1) - sum(total2);
  }



//Codewars
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6


//Codewars
function calc(x){
    return x
      .split('')
      .map(c => c.charCodeAt(0))
      .join('')
      .split('')
      .map(Number)
      .filter(x => x === 7)
      .length * 6
  }