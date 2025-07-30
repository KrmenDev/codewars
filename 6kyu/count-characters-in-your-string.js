// Description:

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



//string with valid characters, can be empty
//return object with the char count
//'aba' => {'a': 2, 'b': 1}
//'abc' => {'a': 1, 'b': 1, 'c':1}
//'' => {}
//create res obj
//turn string into obj
//use loop to count each char


function count(string) {
  let count = {}

  if(string.length === 0){ return {}}
    
  for(const char of string){
    count[char] = (count[char] || 0) + 1
  }
  return count;
}




//Codewars
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}


//Codewars
function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}


//Codewars
function count (string) {
  var result = {};
  
  for(let i = 0; i < string.length; i++) {
    if(result.hasOwnProperty(string[i])){
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  
  return result;
}
