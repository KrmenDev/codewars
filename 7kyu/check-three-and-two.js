// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.
// Examples

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

//Arr string always a,b, or c only 5 length
//true if chars are repeated three and two of the same values
//check if the char repeats two or three times if not return false



function checkThreeAndTwo(array) {
  let countA = array.map((char) => char === 'a' ? 1 : 0).reduce((acc,c) => acc + c, 0)
  let countB = array.map((char) => char === 'b' ? 1 : 0).reduce((acc,c) => acc + c, 0)
  let countC = array.map((char) => char === 'c' ? 1 : 0).reduce((acc,c) => acc + c, 0)
  if(countA === 3 && countB === 2){
    return true
  }else if(countA === 2 && countB === 3){
    return true
  }else if(countA === 3 && countC === 2){
    return true
  }else if(countA === 2 && countC === 3){
    return true
  }else if(countC === 3 && countB === 2){
    return true
  }else if(countC === 2 && countB === 3){
    return true
  }else{
    return false
  }
  
}


//Codewars
function checkThreeAndTwo(array) {
  const counts = array.reduce((result, letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
    
    return result;
  }, {});
  
  const containsThree = Object.values(counts).some(x => x === 3);
  const containsTwo = Object.values(counts).some(x => x === 2);
  
  return containsThree && containsTwo;
}



//Codewars
function checkThreeAndTwo(array) {
  let as = array.filter(x =>x === 'a').length;
  let bs = array.filter(x =>x === 'b').length;
  let cs = array.filter(x =>x === 'c').length;
  return (as === 3 || bs === 3 || cs=== 3)  
          && (as === 2 || bs === 2 || cs === 2);
}



//Codewars
function checkThreeAndTwo(array) {
  var item1 = 0, item2 = 0, item3 = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'a') {
      item1++;
    } else if (array[i] === 'b') {
      item2++;
    } else if (array[i] === 'c') {
      item3++;
    }
  }
  return (item1 == 2 || item2 == 2 || item3 == 2) && (item1 == 3 || item2 == 3 || item3 == 3);
}