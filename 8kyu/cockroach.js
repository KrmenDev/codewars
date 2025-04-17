// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//Integer, always positive, never empty
//return number cm per second
//1.09 => 30
//0 => 0
//multiply s * 27.778 and rounded down

function cockroachSpeed(s) {
   return Math.floor(s * 27.778)
  }


//Codewars
const cockroachSpeed = s => Math.floor(s / 0.036);



//Codewars
function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
  }


//Codewars
function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
  }



//Codewars
function cockroachSpeed(s) {
    //multiply km/m by 27.7777777778
    return Math.floor(s*27.7777777778);
  }