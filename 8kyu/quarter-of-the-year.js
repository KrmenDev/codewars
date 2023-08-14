// DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

//P: Interger, whole, from 1 to 12, always positive, always a num, never empty
//R: Return wich quarter as a num, only 1 to 4, only num


//My Code
const quarterOf = (month) => {
    //conditional if the month is less than x return quarter
    if(month <= 3){
        return 1
    } else if(month <= 6){
        return 2
    } else if(month <= 9){
        return 3
    } else {
        return 4
    }
  }

console.log(quarterOf(3),1)
console.log(quarterOf(8),3)
console.log(quarterOf(11),4)


  //E: 
  // 1 <= month <= 12
  /// 1-3 = month = 1
  //// 4-6 = month = 2
  //// 7-9 = month = 3
  //// 10-12 = month = 4


  //CodeWars Best
  const quarterOf2 = m => Math.ceil(m/3);


  //CodeWars
  const quarterOf3 = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
  }
  