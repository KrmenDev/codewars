// Description:

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



//two strings only letters a-z, never empty, always lowercase, repeated chars
//return a new arr sorted alphabetical ascending with no repeated chars
//"aretheyhere", "yestheyarehere" => "aehrsty"
//"inmanylanguages", "theresapairoffunctions" => "acefghilmnoprstuy"
//concatenate s1 and s2 and sort ascending
//use set to store unique letters
//return string


function longest(s1, s2) {
    let str = s1.concat(s2)
    return Array.from(new Set(str)).sort().join('')
   }




//Codewars
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')



//Codewars
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }



//Codewars
function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });
    return s4.join("");
  }


//Codewars
function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();
 
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!output.includes(array[i]) ) {
              output.push(array[i]);
        }
    }
    return output.join('');
}