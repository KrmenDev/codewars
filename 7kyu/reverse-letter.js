// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

//string with letters, symbols, all lowercase
//return reversed string with just aphabetic chars
//ab23c" => "cba"
//"ultr53o?n" => "nortlu"
//str to arr, reverse, filter remove all non alphabetic chars return as str


function reverseLetter(str) {
    let alph = 'abcdefghijklmnopqrstuvwxyz'
  return str.split('').filter((char) => alph.includes(char)).reverse().join('')

}




//Codewars
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');



//Codewars
function reverseLetter(str) {
  return str.split('')
            .reverse()
            .filter(val => /[a-zA-Z]/.test(val))
            .join('');  
}



//Codewars
function reverseLetter(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}



//Codewars
function reverseLetter(str) {
	let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let word = '';
	for(let i = str.length - 1; i >= 0; i--){
		for(let k= 0; k <= alphabet.length - 1; k++){
			if(str[i] == alphabet[k]){
				word = `${word + str[i]}`;
			}
		}
	}

	return word;
  
  
}