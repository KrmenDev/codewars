// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//P: string separeted by space, never empty
//R: a reversed string
//E: 'john McClane' => 'McClane john'
//E: tom jerry' => 'jerry tom'
//P: use the reverse prototype, first make string into an array then use method

function nameShuffler(str){
   return str.split(' ').reverse().join(' ')
  }


//Codewars
const nameShuffler = str => str.split(' ').reverse().join(' ');


//Codewars
function nameSuffle(str){
    var arr = str.split(" ");
    return arr[1] + ' ' + arr[0]
  }
  

  
//Codewars
function nameSuffle(str){
    var arr = str.split(" ");
    return arr[1] + ' ' + arr[0]
  }