// Description:

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
// Examples ( Input --> Output )

// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square


//number, always positive, never empty
//return the next sqr num if a square
//155 => -1
//625 => 676
//if sq is not a whole num return -1 else
//return the sqrt of sq and add +1 and sqrt return num


function findNextSquare(sq) {
    return !Number.isInteger(Math.sqrt(sq)) ? -1: (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
  }




//Codewars
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }



//Codewars
function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
  }



//Codewars
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
  }



//Codewars
function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
  }