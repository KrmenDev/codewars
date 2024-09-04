// Description:

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//P: alway num, never empty, whole
//R: array of nums that are divisible by 2 argument
//E:
// [1,2,3,4,5,6],3 => [3,6]
// [0,1,2,3,4,5,6], 4 => [0,4]
// [0], 4) => [0]
// [1,3,5], 2 => []
//P:
// check each arr elemnt if divisible by divisor
//return new arr


function divisibleBy(numbers, divisor){
    return numbers.filter((num) => num % divisor === 0) 
}


//CodeWars
function divisibleBy(numbers, divisor) {
	var newArr = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % divisor === 0) {
			newArr.push(numbers[i]);
		} 
	}
return newArr;
}


//CodeWars
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));



//CodeWars
function divisibleBy(numbers, divisor){
	let answer = []
	 numbers.map(x => {
	 if(x % divisor === 0){
	   answer.push(x)}
	 } )
	 return answer
	}