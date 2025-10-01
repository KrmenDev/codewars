// Description:

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//string always valid, upper and lower case, never empty
//return all vowels as numbers and reverse decoding
//'hello' => 'h2ll4'
//'How are you today?' => 'H4w 1r2 y45 t4d1y?'
//decode:
//'h2ll4' => 'hello'
//create an object with key value of each vowel and number to be replaced
//split the string to array, loop the array
//replace vowel if the character is a vowel
//return the character if its not a vowel
//return as string


function encode(string) {

let replaceVowels = {
a: 1,
i: 3,
e: 2,
o: 4,
u: 5
}

 return string.split('').map((char) => replaceVowels[char] ? replaceVowels[char] : char).join('')

}

function decode(string) {

let replaceNumbers = {
1: 'a',
3: 'i',
2: 'e',
4: 'o',
5: 'u'
}

 return string.split('').map((char) => replaceNumbers[char] ? replaceNumbers[char] : char).join('')

}



//Codewars
// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}




//Codewars
function encode(string){
  var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  return codeStringGivenMapping(string, vowelMapping);
}

function decode(string){
  var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  return codeStringGivenMapping(string, vowelMapping); 
}

function codeStringGivenMapping(string, mapping){
  return string.split('').map(function(char){
    return mapping[char] || char;
  }).join(''); 
}



//Codewars
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')