// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//P: string lower and uppercase, can be empty
//R: array with pair of letters of strings
//E: "" => []
//E: "ab" => ['ab', '__']
//P: split str characters into pairs if no pair replace with a _, return array

function solution(str){
    let pairs = []
    
    for(let i = 0; i< str.length; i+=2){
        if(i < str.length -1){
            pairs.push(str[i] + str[i+1])
        } else{
            pairs.push(str[i]+ '_')
        }
    }
    return pairs
}



//Codewars
function solution(str){
    arr = [];
    for(var i = 0; i < str.length; i += 2){
      second = str[i+1] || '_';
      arr.push(str[i] + second);
    }
    return arr;
  }
