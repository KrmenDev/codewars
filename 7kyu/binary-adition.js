// DESCRIPTION:
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


//My Solution
//P: always a num, always two num, always whole, never empty, never floated, always positive
//R: single whole num, always positive, always with 1 and 0. always a string
//E: 1,1 => '10'
//   5,9 => '1110'
//P: Sum the numbers
// divide the sum by 2 until the quotient 1
// return those quotients
function addBinary(a,b) {
    let sum = a + b
    let binary = ''
    while( sum > 0){
        if(sum % 2 == 1){
            binary = '1' + binary
        }else {
            binary = '0' + binary
        }
        sum = Math.floor(sum/2)
    }
    return binary
}


//CodeWars
function addBinary(a,b){
    return (a+b).toString(2)
  }