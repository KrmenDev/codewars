// Description:

// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


//two integers, always positive, never empty
//number of years father is twice as old as son
//36, 7 => 22
//55, 30 => 5
//if dad / son == 2 
//sum son + son - dad


function twiceAsOld(dadYearsOld, sonYearsOld) {
   return Math.abs((sonYearsOld + sonYearsOld) - dadYearsOld)
  }




//Codewars
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }



//Codewars
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
  }



