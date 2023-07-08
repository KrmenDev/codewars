// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//My Solution
function digitize(n) {
    //code here
  }


//My 1 Solution
function digitize(n) {
    n = [n]
    return n.reverse()
  }

  console.log(digitize(321), [1,2,3])


  //2 Solution
  function digitize(n) {
    let numArray = n.toString().split('').reverse()
    return numArray.map(e => parseInt(e))
  }

//codeWars Best Practice
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  console.log(digitize(321), [1,2,3])