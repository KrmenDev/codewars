// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s){
    //#Happy Coding! ^_^
  }

//1h = 3,600,000
//1m = 60,000
//1s = 1,000

  //My solution
  function past(h, m, s){
    let result = h*3600000 + m*60000 + s*1000
    return result
  }

//CodeWars Best Practice
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

  //CodeWars
  const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
