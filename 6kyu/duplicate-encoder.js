// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


//P: string, lower and uppercase, symbols
//R: string with "(" for each unique character and ")" for duplicates
//E: "recede"   =>  "()()()"
//   "din"      =>  "(((" 
//P: replace all elements with "(" if repeated element with ")"


function duplicateEncode(word){
    let str = word.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i]){

        }
      }
    return str;
}





function duplicateEncode(word){
    let str = word.toLowerCase();
    let result = '';

    for(let char of str){
        if(str.lastIndexOf(char) === str.indexOf(char)){
            result += "(" 
        } else {
            result += ")" 
        }
    }
    return result
}



//Codewars
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }