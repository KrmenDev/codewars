// Description:
// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:


//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

// NOTE: All numbers will be whole numbers greater than 0.


//number, always positive, never empty
//return a string with the sum of nums to get num
//    12 => "10 + 2"
//    10 => "10 + 10"
//    1023 => "1000 + 23"
//mil, cien, dec, uni
//contar cuantas unidades tiene el num 
//if length 2 add 10 to each num
//if length 3 add 100 to the first two and 10 to the third
//if length 4 add 1000 to first two and 10 to the next two
//if length 5 add first two add 1000, two more add 10 and last
//split



//Codewars
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map((e, i) => e * Math.pow(10, i))
                            .filter(e => e > 0)
                            .reverse()
                            .join(" + ");



                      

//Codewars
function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}




//Codewars
expandedForm = n => [...String(n)].reverse().map((x,i) => x == '0' ? '' : x + '0'.repeat(i)).filter(x => x != '').reverse().join(' + ')




//Codewars
var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}
