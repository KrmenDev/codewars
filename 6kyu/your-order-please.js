// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


//P: string with letters lowecase, uppercase, numbers, can be empty
//R: sorted string with the correct order of numbers
//E: "Mor2 Tim3 One1" =>  "One1 Mor2 Tim3"
//E: "e3 a1 c2" => "a1 c2 e3"
//P: separate all words in string, check for numbers, arrange numbers from lowest to highest, return string

function order(words){
    let str = words.split(' ').sort((a,b) =>{
        return a.split('').find(Number) - b.split('').find(Number)
    })
    
    return str.join(' ')
}



//Codewars
function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }



//Codewars
  function order(words) {
    const result = [];
    const chunks = words.split(' ');
    
    for (let i = 1; i < chunks.length + 1; i++) {
      result.push(chunks.find((chunk) => chunk.includes(i)));
    }
    
    return result.join(' ');
  }



  //CodeWars
  function order(words){
    return words.split(' ').sort((a,b) => {return a.split('').find(Number) - b.split('').find(Number)}).join(' ')
  }