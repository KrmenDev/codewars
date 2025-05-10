// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Examples:

// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

//number, always positive, never empty, always > 1
//return arr of numbers that are divisors of integer or string of `${integer} is prime`
//12 => [2,3,4,6]
//15 => [3,5]
//for loop loop integer times
//if loop num divisible by integer push
//num to res divisor arr


function divisors(integer) {
    let divisorArr = []

        for(let i = 2; i < integer; i++){
        if(integer % i === 0){
             divisorArr.push(i)
        }
      }
      return divisorArr.length ? divisorArr : `${integer} is prime`
    }



//Codewars
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};



//Codewars
function divisors(integer) {
	var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
    	divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};




//Codewars
function divisors(integer) {
	var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
    	divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};


//Codewars
function divisors( int ) {
    const arr = Array.from({length: int-1}, (_, i)=> i+1).slice(1).filter(el => int % el === 0)
    return arr.length ? arr : `${int} is prime`;
  };