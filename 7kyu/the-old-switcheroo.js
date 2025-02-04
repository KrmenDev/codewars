// Description:

// Write a function

// vowel2index(str)

// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''

// Your function should be case insensitive to the vowels.


//string, can be empty
// string with index number replacing letter
// '' => ''
// 'this is my string' => 'th3s 6s my str15ng'
// change string to arr
// use map go each char if vowel change it for its index
//join arr to str


function vowel2index(str) {
    let vowel = ['a','e','i','o','u']
    return str.split('').map((char,i) => vowel.indexOf(char.toLowerCase()) != -1 ? i + 1 : char).join('')
 }
 
 


//Codewars
function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (m, i) => i + 1);
 }



//Codewars
const vowel2index = str => str.replace(/[aeiou]/gi,(_,i) => i+1);



//Codewars
const vowel2index = ($tr) => $tr.replace( /[aeiou]/gi, (_,i)=> i+1 )


//Codewars
function vowel2index(str) {
    var arr = str.split(''),
        i = 0,
        len = arr.length,
        vowels = ['a','e','i','o','u'];
    
    for (i=0; i<len; i++) {
      if ( vowels.indexOf(arr[i].toLowerCase()) > -1 ) arr[i] = i+1;
    }
    
    return arr.join('');
 }