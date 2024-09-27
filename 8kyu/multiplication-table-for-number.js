// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.


//P: number, always positive, never empty, number does not indicate start
//R: string multiplication table from 1 to 10 of the number given
//E: '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'
//P: we need to print the operation 1 * number = multiplication table
//always from 1 to 10
// use a loop to get the result of 1 => 10 * number
//push result to array then 
//concatenate the string with the result

function multiTable(number) {
    let result = []

    for(let i = 1; i <= 10; i++){
        result.push( i  * number)
    }

    let table = 
       `1 * ${number} = ${result[0]}\n2 * ${number} = ${result[1]}\n3 * ${number} = ${result[2]}\n4 * ${number} = ${result[3]}\n5 * ${number} = ${result[4]}\n6 * ${number} = ${result[5]}\n7 * ${number} = ${result[6]}\n8 * ${number} = ${result[7]}\n9 * ${number} = ${result[8]}\n10 * ${number} = ${result[9]}`

    return table
 
}


//Codewars
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }



//Codewars
function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}

