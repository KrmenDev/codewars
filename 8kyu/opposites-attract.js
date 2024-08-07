// DESCRIPTION:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


//P: two whole numbers, never empty, always positive numbers
//R:if flower1 is even and flower2 odd return true else false
//E: 1,4 => true
//E: 2,2 => false
//E: 0,0 => false
//E: 0,1 => true
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
  }


  //My Solution
  function lovefunc(flower1, flower2){
    return flower1 % 2 === 0 && flower2 % 2 != 0 || flower2 % 2 === 0 && flower1 % 2 != 0 ? true : false
  }

  
  //CodeWars Best practice
  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }


  //codeWars
  function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 == 1;
  }