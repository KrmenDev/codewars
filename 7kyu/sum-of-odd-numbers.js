// Given the triangle of consecutive odd numbers:

//1              1
//2           3     5
//3        7     9    11
//4    13    15    17    19
//5 21    23    25    27    29
//6 ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


//My Solution

//P: triangle of num, whole, positives, never empty
//R: Sum of the n row of odd nums
//E:
//// 5 => 125
//// 42 => 74088
//P:
// create an array with the length of odd nums (n=5 => 1+2+3+4+5)
// populate that array with only odd nums
//just the las n amount of nums

function rowSumOddNumbers(n) {
    let numOfOdds = 0
    for(let i = 1; i <= n; i++){
        numOfOdds += i
    }
    return Array.from({length: numOfOdds}, (_,i) => i * 2 + 1).slice(-n).reduce((acc,c) => acc+c, 0)
}



//CodeWars
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }



//CodeWars
function rowSumOddNumbers(n) {
	return n*n*n
}