// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//My Solution
function solution(str, ending){
    let lastChar = str.split('').reverse().slice(0, ending.length).reverse().join('')
    return lastChar === ending ? true : false
  }



  //CodeWars Best Practice
  function solution(str, ending){
    return str.endsWith(ending);
  }


