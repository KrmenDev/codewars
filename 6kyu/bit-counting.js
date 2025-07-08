// Description:

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


//integer, always valid, always positive
//return the number of bits of binary of that num
//0 => 0
//4 => 1
//7 => 3
//if integer is 0 return 0
//pass integer to binary return num of digits


function countBits(n) {
    return n.toString(2).split('').map((e) => Number(e)).reduce((acc,c) => acc + c);
}



//Codewars
countBits = n => n.toString(2).split('0').join('').length;


//Codewars
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};



//Codewars
function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}



//Codewars
const countBits = n => n.toString(2)
                        .split('')
                        .filter(ele => ele == 1)
                        .length