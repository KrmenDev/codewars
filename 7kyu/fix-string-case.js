// Description:

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//string with lowercase and uppercase
//return all lower or all uppercase
//check all letters and if two or more are lower change the rest to lower else to uppercase

function solve(s){
    let lowerCount = 0
    let upperCount = 0
   for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toLowerCase()){
        lowerCount ++
    }else if(s[i] === s[i].toUpperCase()){
        upperCount++
    }
   }

   if(lowerCount >= s.length/2){ 
        return s.toLowerCase()
   }else{
        return s.toUpperCase()
   }
}


//Codewars
function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}


//Codewars
function solve(s){
  let upper = s.split('').filter(x => x === x.toUpperCase()).length
  let lower = s.length - upper
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}



//Codewars
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()



//Codewars
function solve(s){
   let c = 0;
   for (let i = 0; i < s.length; i++) {
     if (s[i] === s[i].toUpperCase()) c++;
   }
   return (c > s.length/2) ? s.toUpperCase() : s.toLowerCase()
}