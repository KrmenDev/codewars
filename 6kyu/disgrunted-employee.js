// Description:

// Sir Bobsworth is a custodian at a local data center. As he suspected, Bobsworth recently found out he is to be fired on his birthday after years of pouring his soul into maintaining the facility.

// Bobsworth, however, has other plans.

// Bobsworth knows there are 1 to n switches in the breaker box of the data center. Moving from switch 1 to n, Bob first flips every switch off. Beginning from the first switch again, Bob then flips every 2nd switch. Once again starting from the first switch, Bob then flips every 3rd switch. Bob continues this pattern until he flips every nth switch & makes n passes.

// At the end of Bobsworth's mayhem, how many switches are turned off?
// Specifications

// Create the function off, that receives the nth switch as argument n. The function should return an ascending array containing all of the switch numbers that remain off after Bob completes his revenge.
// Example: (Input --> Output)

// 1 --> [1]
// 2 --> [1]
// 4 --> [1, 4]
// 9 --> [1, 4, 9]

// The parameter n will always be a number >= 1

//n is always a positive number, never empty
//return array of numbers off switchs off ascending order
//1 => [1]
//2 => [1]
//9 => [1,4,9]
//4 => [1,4] => [0,0,0,0] - [0,1,0,1] - [0,1,1,1] - [0,1,1,0]
//first all are off, then on 1, 3, then 1, 2, 3 then 1, 2, so we return index 0 and 3 that are off tose are number 1 and 4
//fill array from 1 to n
//if the number is a perfect square remove it

function off(n) {
    
  return Array.from({length:n}).map((_, i) => i + 1).filter( num => {
    const sqrt = Math.sqrt(num)
    return Number.isInteger(sqrt)
  })
}



//Codewars
function off(n) {
  var count = 1, arr = [];
  for(var i = 1; i <= n; i += count){
    arr.push(i);
    count += 2;
  }
  return arr;
}



//Codewars
function off(n) {
		// Setting all switches to off (true)
    var switches = Array();
    for (var i = 1; i<n+1; i++){
    		switches[i] = true;
    }
		
    // Flip every ith switch
    for (var i = 2; i <= n; i++){
    		for (var j = i; j <=n; j+=i){
    				switches[j] = !switches[j];    
        }
    }
    
    // Find all switches off
    var off_switches = Array();
    for (var i in switches){
        if (switches[i]){
   					off_switches.push(+i);
        }
    }
    return off_switches;
}



//Codewars
/**
*For a switch to be off, it needs to be flipped an odd
*number of times.
*
*The only switches that are flipped an odd number of times
*have an odd number of factors -- AKA perfect squares.
*/
function off(n) {
  var ret = [], max = ~~Math.sqrt(n);
  for (var i = 1, j; i <= max; i++) {
    j = i*i;
    if (j <= n) ret.push(j)
    else break;
  }
  return ret;
}



//Codewars
function off(n) {  
  return Array.apply(0, Array(Math.sqrt(n) | 0)).map(function(_,a){ return ++a * a; });
}