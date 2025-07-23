// Description:

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
// Example:

// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


//string representing roman numerals, always valid
//return roman numeral into an integer
//'XXI' => 21
//'I' => 1
//'MMCIII' => 2008
//'IV' => 4
// 'MDCLXVI' => 1666
//check each letter and return its value then add them all and return
//have an object with letter and value

//If 'I' before 'V' substract and 'I' and 'X', also for 'XL' 'XC', 'CD' and 'CM'
//If a smaller number appears before a larger substract

function solution (roman) {

    let romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

	return Math.abs(roman.split('').map((el) => romanNumerals[el]).reduce((acc,c, i, arr) => acc + (arr[i+1] > c) ? -c : c), 0)

}



1
//Codewars
function solution(roman)
{
	var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

	for(i = 0; i < numbers.length; i++)
  {
  	if(data[numbers[i]] < data[numbers[i+1]])
    {
    	sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else
    {
    	sum += data[numbers[i]];
    }
  }
  
  return sum;
}




//Codewars
function solution(roman){
   var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
   
   return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
}




//Codewars
const numeralMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function solution(roman){
  const arrNums = roman.split('').map((el) => numeralMap[el]);
  
  return arrNums.reduce((sum, cur, i, a) => {
    if (cur < a[i+1]) return sum - cur;
    return sum + cur;
  }, 0)
}