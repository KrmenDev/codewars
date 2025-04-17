// Description:

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".


//number, always valid, always positive
//return a string if n < 10 => "Keep at it until you get it" else =>  "Great, now move on to tricks"


function hoopCount (n) {
    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"
 }


//Codewars
function hoopCount (n) {
    const HOPS_LIMIT = 10
    return n >= HOPS_LIMIT
      ? 'Great, now move on to tricks'
      : 'Keep at it until you get it';
 }
 

 
//Codewars
const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';



//Codewars
function hoopCount(n) {
    return n >= 10 ?
      "Great, now move on to tricks" :
      "Keep at it until you get it";
  }