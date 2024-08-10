// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


//P: array of strings, can be null or undefined
//R: number of sheep (true)
//E: [undefined] => 0
//E: [null] => 0
//E: [null, false, false, null, true, false] => 1
//P: filter arr if true add it and return length
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((e) => e === true).length 
  }


  //My Solution
  function countSheeps(arrayOfSheep) {
    let numOfSheep = arrayOfSheep.filter(sheep => sheep === true)
    return numOfSheep.length
  }

  //CodeWars Best Practice
  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }