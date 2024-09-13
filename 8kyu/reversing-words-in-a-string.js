// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"


//P: string, can be empty, multiple white spaces
//R: reverse string
//E: 'no one cares' => 'cares one no'
//E: '' => ''
//E: 'This is so easy' => 'easy so is This'
//P: make string into an array, use reverse method and join to return a string


function reverse(string){
   return string.split(' ').reverse().join(' ')
  }



  //Codewars
  function reverse(string){
    // validate input
    if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
    // just use the dumb way out since it's jabbascripps
    return string.split(' ').reverse().join(' ');
  }

//Codewars
  function reverse(string){
    var s = string;
    s = s.split(' ');
    s = s.reverse();
    s = s.join(' ');
    return s;
}


//Codewars
function reverse(string){
    return string.replace(/\s+/g, ' ').split(' ').reverse().join(' ');
  }