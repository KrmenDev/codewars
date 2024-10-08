// DESCRIPTION:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


//P: numbers, always positive, never empty
//R: Return string 'A' to ''F' of average
//E: 95,90,93 => 'A'
//E: 70, 70, 100 =>'B'
//E: 44, 55, 52 => 'F'
//P: summ all nums and divide by 3
//P: Use a conditional if > 100 => 'A'

function getGrade (s1, s2, s3) {
    let averageNum = (s1 + s2 + s3) / 3
    return averageNum < 60 ? 'F' : averageNum < 70 ? 'D' : averageNum < 80 ? 'C' : averageNum < 90 ? 'B' : 'A'
  }



function getGrade (s1, s2, s3) {
    let array = [s1, s2, s3]
    let average = array.length === 0 ? 0 : array.reduce((acc,c) => acc + c, 0)/array.length
    if(average >= 90 ){
        return 'A'
    }else if(average >= 80 ){
        return 'B'
    }else if(average >= 70 ){
        return 'C'
    }else if(average >= 60 ){
        return 'D'
    }else{
        return 'F'
    }
}

//CodeWars
function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }


  //CodeWars
  function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
  }