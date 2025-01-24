// Description:

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

//arr with string of numbers
//string of letters
//['4', '24'] => 'wc'
//['24', '12', '23', '22', '4', '26', '9', '8'] => 'codewars'
//['25','7','8','4','14','23','8','25','23','29','16','16','4'] => 'btswmdsbd kkw')
//assign alphabet and return element depending on the index
//return a string

function switcher(x){
    let alphabet = ['-','z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?',' ']
    return x.map((num) => alphabet[num]).join('')
}



//Codewars
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')



//Codewars
function switcher(x)
{
  return x.map(a => 
    {
      if(a == 27) return "!";
      if(a == 28) return "?";
      if(a == 29) return " ";
      return String.fromCharCode(97 + 26 - parseInt(a));
      
    }).join('');
}


//Codewars
function switcher( $ ){
    const arr = ['', "z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", "!", "?"," "];
    return $.map(Number).map(el => arr[el] ).join('')
  }