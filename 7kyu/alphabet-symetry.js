// Description:

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// string uppercase and lowerxase no spaces, never empty 
//number of letter that occupy their alphabet postition
//["abide","ABc","xyz"] => [4,3,0]
//["encode","abc","xyzD","ABmD"] => [1, 3, 1, 3]
//["abide","ABc","xyz"] => [4,3,0]
// check letter the alphabet number and compare to index +1
//add 1 for each match

function solve(arr){  
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    return arr.map((e) => e.toLowerCase().split('').reduce((acc,c,i) => acc + (i === alphabet.indexOf(c) ? 1 : 0), 0))
}


//Codewars
function solve(arr){  
    var alphabeth = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
  };


//Codewars
const solve = a => {  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return a.map(e => e.toLowerCase().split``.reduce((s, e, i) => s + 
    (i === alphabet.indexOf(e) ? 1 : 0)
    , 0));
  };



//Codewars
function solve(arr){  
    var alphabeth = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
  };

//Codewars
function solve(arr, abc = 'abcdefghijklmnopqrstuvwxyz'){
    arr = arr.map(el => el.toLowerCase());
    return arr.map(el => [...el].map((e, i)=> e === abc[i] ? 1 : 0).reduce((a, b) => a+b, 0))
  };