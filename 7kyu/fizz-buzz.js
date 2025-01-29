// Description:

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

//     If the value is a multiple of 3: use the value "Fizz" instead
//     If the value is a multiple of 5: use the value "Buzz" instead
//     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]


//number, never empty, always positive, never less than 1
// Arr of numbers from 1 to N if multiple of 3 "Fizz" if multiple of 5 "Buzz" if multiple of 3&5 "FizzBuzz"
// (3) => [1,2"Fizz"]
// (5) => [1,2,"Fizz",4,"Buzz"]
// (15) => [1,2,"Fizz",4,"Buzz", "Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
// use loop to fill arr of n nums, if % 3 and 5 "FizzBuzz", if % 5 "Buzz", if % 3 "Fizz"


function fizzbuzz(n){
    let arr = []
    for(let i=1; i <= n; i++){
        if(i % 5 === 0 && i % 3 === 0){
            arr.push("FizzBuzz")
        }else if(i % 5 === 0){
            arr.push("Buzz")
        }else if(i % 3 === 0){
            arr.push("Fizz")
        }else{
            arr.push(i)
        }
    }
    return arr
}





//Codewars
function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;



//Codewars
function fizzbuzz(n) {
	var fizzified = [];
  for (var i = 1; i <= n; i++) {
    var val = '';
    if (i % 3 == 0) val += 'Fizz';
    if (i % 5 == 0) val += 'Buzz';
   	fizzified.push(val || i);
  }
  return fizzified;
}

function fizzify(n) {
	return fizzbuzz(n);
}


//Codewars
// Return an array
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}

