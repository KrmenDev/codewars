// Description:

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


//ar with numbers, always positive
//return only even numbers
// [0,1] => [0]
// [0,1,2,3] => [0,2]


function noOdds( values ){
    return values.filter((num) => num % 2 === 0)
  }


//Codewars
var noOdds = values => values.filter(x => x % 2 === 0);



//Codewars
function noOdds( values ){
    function isEven(number){
      return number%2 == 0;
    }
    
    return values.filter(isEven);
  }


//Codewars
function noOdds( values ){
    // Return all non-odd values
    var goodies = [];
    for(var i=0; i<values.length;i++){
        if(values[i]%2 == 0){
          goodies.push(values[i]);
        }
    }
    
    return goodies;
  }