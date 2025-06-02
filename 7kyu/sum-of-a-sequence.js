// Description:

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)


//3 numbers, all positive, can include zero
//return the sum of sequence
// 1,5,3 => 5 
// 8, 1, 1 => 0
// first the number to begin with, we need to add
//as many steps to reach end
//use a loop to start with begin and add as many steps until end


const sequenceSum = (begin, end, step) => {
    let res = []
    if(begin < end ){
          for(let i = begin; i <= end; i+= step){
                res.push(i)
  }
    }else{
        return 0
    }
    return res.reduce((acc,c) => acc+c, 0)
};




//Codewars
const sequenceSum2 = (begin, end, step) => {
  var sum = 0;
  for(var i=begin;i<=end;i+=step)
  {
    sum += i;
  }
  return sum;
};




//Codewars
const sequenceSum3 = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};




//Codewars
const sequenceSum4 = (begin, end, step) => {
  if (begin > end)
    return 0;
  const n = Math.floor((end - begin) / step) + 1;
  return (2 * begin + step * (n - 1)) * n / 2;
};