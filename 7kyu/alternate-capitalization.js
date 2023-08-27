// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


//My Solution
//P: always a string, never empty, always lower case, never numbers. never symbols
//R: Array with two strings one even and one odd uppera case
//E: 
//// ("abcdef") ==> ['AbCdEf', 'aBcDeF'])
//// ("codewars"),['CoDeWaRs', 'cOdEwArS'])
/// ("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']
//P:
/// conditional
/// if even unshift upper case to new array
/// if odd push upper case to back array
/// return array

function capitalize(s){
    let even = []
    let odd = []
    s.split('').forEach((element, index) => {
        index % 2 === 0  ? even.push( element.toUpperCase()) + odd.push(element) : even.push(element) +  odd.push( element.toUpperCase())
          })
    let evenAndOddArray = [even.join(''), odd.join('')]
        return evenAndOddArray
  }




//CodeWars
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };

  

//CodeWars
  function capitalize(s){
    return [0,1].map(r => [...s].map((c,i) => i % 2 === r ? c.toUpperCase() : c).join(''));
  };



//CodeWars
function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
            [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
  }