// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//P: number always positive, never empty, even and odd numbers
//R: string with 1 and 0
//E: 4 => '1010'
//   6 => '101010'
//P: create and fill array with number of size, then if even index a 0 and odd a 1
 
function stringy(size) {
    return Array(size).fill('0').map((e,i) => i % 2 === 0 ? e = '1': e = '0').join('');
}


function stringy(size) {
    return Array(size).fill(1).map((e, i) => e = i % 2 ? 0 : 1).join('');
  }



//CODEWARS BEST
  function stringy(size) {
    var str='';
    for( var i = 1; i <= size; i++ )
      str += i % 2;
    return str;
  }