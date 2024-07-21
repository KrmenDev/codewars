// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


//P: numbers, never empty always > 0
//R: array of reversed numbers
//E: 35231 => [1,3,2,5,3]
//E: 0 => [0]
//P: pass numbers to array then reverse the order and return


function digitize(n) {
  let str = String(n)
  return [...str].map((e) => Number(e)).reverse()
}


  function digitize(n) {
    let numArray = n.toString().split('').reverse()
    return numArray.map(e => parseInt(e))
  }

//codeWars Best Practice
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  console.log(digitize(321), [1,2,3])