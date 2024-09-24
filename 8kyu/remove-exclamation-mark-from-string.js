// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.


// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"


//P: always a string, never empty, can have more than one !
//R: string without the last !
//E: "Hi! Hi!" ---> "Hi! Hi"
//E: "!Hi!"    ---> "!Hi"
//E: "Hi"      ---> "Hi"
//check if last character == ! remove it

function remove (string) {
    //coding and coding....
    return string.slice(-1) === '!' ? string.slice(0, -1) : string
  }


//Codewars
const remove = s => s.replace(/!$/, '');


//Codewars
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }