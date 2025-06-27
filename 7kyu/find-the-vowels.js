// Description:

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

//     Vowels in this context refers to: a e i o u y (including upper case)
//     This is indexed from [1..n] (not zero indexed!)

//string, all valid letters, can be upper and lowercase
//return index of vowel position + 1
//create vowel string
//return index on wich vowel is on string


function vowelIndices(word){
  let vowels = ['a','e','i','o','u','y']
  let indexes = []

    word.toLowerCase().split('').map((char, i) => vowels.indexOf(char) === -1 ? char : indexes.push(i+1))
   return indexes
}



//Codewars
function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}



//Codewars
function vowelIndices(word){
  const str = 'aeiouy';
  const arr = word.toLowerCase().split('');
  let answer = [];
  arr.forEach((name, i) => {
    if (str.indexOf(name) !== -1) {
      answer.push(i + 1);
    }
  });
  return answer;
}


//Codewars
function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}


//Codewars
function vowelIndices(word){
  vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  result = []
  for (var i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) != -1) {
      result.push(i + 1);
    }
  }
  return result;
}