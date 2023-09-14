// Description:

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


//My Solution

//P: Array strings, never empty, can repeat, no numbers
//R: Array with the string filtered from geese
//E:
//["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) => ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]) => []
//P: compare the birds array with the geese array 
// eliminate duplicates
//return array

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = []
    birds.forEach((bird) => {
        if(!geese.includes(bird)){
            result.push(bird)
        }
    })
    return result
    }

//   function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter((bird) => !geese.includes(bird))
//   };



//CodeWars
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  };



//codeWars
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
    //when you use indexOf(), it returns -1 for elements not found in the array
  };
