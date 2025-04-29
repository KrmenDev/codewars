// Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that


//number, always positive, always >= 1
// array with human, cat, dog years
// 1 => [1, 15, 15]
// 2 => [2, 24, 24]
// 3 => [3, 28, 29]
// 10 =>[10, 56, 64]
//if humanYears are 1 return [1,15,15], if 2 return [2,24,24] if more
// human - 2 * 4 cat and 5 dogs

var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears === 1){
        return [1, 15, 15]
    }else if(humanYears === 2){
        return [2, 24, 24]
    }else{
        return [humanYears, (((humanYears - 2) * 4) + 24), (((humanYears - 2) * 5) + 24)]
    }
  }
  

//Codewars
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }
  
  


//Codewars
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }


//Codewars
function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
    
  }


//Codewars
function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
    
  }