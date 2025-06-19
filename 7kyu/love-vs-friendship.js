// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


//string always lowecase, always valid
//return the sum off all letters in alph order
//'friends' => 75
//'attitude' => 100
//'family' => 66
//each letter in alphabet is the index num + 1
//return the string as numbers in arr then reduce


function wordsToMarks(string){

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  return string.split('').map((e) => alphabet.indexOf(e)+1).reduce((acc,c) => acc + c, 0)

}



//Codewars
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)




//Codewars
function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}



//Codewars
function wordsToMarks(string) {
  return string.split('').reduce((acc, char) => {
    return acc + char.charCodeAt() - 96;
  }, 0);
}



//Codewars
function wordsToMarks(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let marks = 0;
  string.split('').forEach((char) => {
    marks += alphabet.indexOf(char) + 1;
  });
  return marks;
}