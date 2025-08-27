// Description:

// Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

// You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

// If the name has a length of 0, return "name must be at least one letter"
// Examples

// "Bill" ==> [ ["B", "i"],
//              ["l", "l"] ]

// "Frank" ==> [ ["F", "r", "a"],
//               ["n", "k", "."],
//               [".", ".", "."] ]


//string, can be empty
//return a perfect square grid with name and or dots
// 'G' => [['G]]
//'' => 'name must be at least one letter'
//'Beyonce' => [['B', 'e', 'y'], ['o', 'n', 'c'], ['e', '.', '.']]


//Codewars
function matrixfy(str) {

    if(str.length === 0){ return 'name must be at least one letter'}
    
    let matrix = []
    const length = Math.ceil(Math.sqrt(str.length))
    let k = 0

    for(let i = 0; i < length; i ++){
        matrix.push([])
        for(let j = 0; j < length; j++){
            matrix[i].push(str[k++]|| '.')
        }
    }


    return matrix
}



//Codewars
const matrixfy = str => {
  const l =  Math.ceil(Math.sqrt(str.length))
  const arr = []
  let k = 0
  for(let i=0; i<l; i++){
    arr.push([])
    for(let j=0; j<l; j++){
      arr[i].push(str[k++]||'.')
    }
  }
  return arr.length?arr:'name must be at least one letter'
};



//Codewars
const matrixfy = str => {
  if (!str) {
    return "name must be at least one letter";
  }
  const n = Math.ceil(Math.sqrt(str.length));
  return str.padEnd(n * n, '.')
            .match(new RegExp(`.{${n}}`, 'g'))
            .map(s => [...s]);
}




//Codewars
const matrixfy = str => {
    if (str.length == 0) {
      return 'name must be at least one letter'
    }

    const len = Math.ceil(Math.sqrt(str.length))

    str += '.'.repeat(len * len - str.length)

    const result = new Array(len)

    for (let i = 0; i < len; i++) {
        const array = new Array(len)

        for (let j = 0; j < len; j++) {
            array[j] = str[len * i + j]
        }

        result[i] = array
    }
    
    return result
}