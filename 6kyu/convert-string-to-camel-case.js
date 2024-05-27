// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


//P: string lower and uppercase, with symbols can be empty 
//R: string with every letter after - uppercase no symbols
//E: "A-B-C" => "ABC"
//   "Conver_to-camel" => "ConvertToCamel"
//   "camel_case" => "camelCase"
//P: replace to uppercase after every symbol, return all other characters



function toCamelCase(str){
    let arr = str.split('');
    for(i=0; i < arr.length; i++){
        let letter = arr[i];
        if(letter == '-' || letter == '_'){
            arr[i+1] = arr[i+1].toUpperCase();
            arr[i] = '';
        }
    }
    return arr.join('');
}




//Codewars
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}



