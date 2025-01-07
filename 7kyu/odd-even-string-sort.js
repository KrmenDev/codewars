// Description:

// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
// Examples

// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357

// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".
// Notes

// Tested strings are at least 8 characters long.


//string with at least 9 characters, uppercase and lowercase
//group of even indexes then space and odd indexes as string
//"CodeWars" => "CdWr oeas"
//"YCOLUE'VREER" => "YOU'RE CLEVER"
//loop string and add all even indexes at the beginning then add a space and all odd indexes


function sortMyString(S) {
    let even = []
    let odd = []
    S.split('').map((e, i) => i % 2 === 0 ? even.push(e) : odd.push(e))
    return `${even.join('')} ${odd.join('')}`
}




//Codewars
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}



//Codewars
function sortMyString(S) {
    let strEven = ''
    let strOdd = ''
    for (let i = 0; i < S.length; i++) {
      if (i % 2 === 0) {
        strEven += S[i]
      }
      else {
        strOdd += S[i]
      }
    }
    return strEven + ' ' + strOdd
  }



//Codewars
function sortMyString(S) {
    let even = [], odd = [];
    S.split('').forEach((e, i) => { i % 2 === 0 ? even.push(e) : odd.push(e) })
    return `${even.join('')} ${odd.join('')}`;
  }