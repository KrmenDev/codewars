// DESCRIPTION:
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.


//My Solution

//P: always a number, never 0, symbols or strings, always whole num
//R: An array with sequence of number from (n)
//E:
//// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
// 5 --> [1, 2, 3, 4, 5]
//P: create a new empty array with n elements
// change those elements to numbers
//return array

function monkeyCount(n) {
    return Array.from({length: n}, (_, i) => (i + 1))
}

console.log(monkeyCount(5),[1, 2, 3, 4, 5])






