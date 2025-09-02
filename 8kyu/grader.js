// Description:

// Create a function that takes a number as an argument and returns a grade based on that number.
// Score 	Grade
// Anything greater than 1 or less than 0.6 	"F"
// 0.9 or greater 	"A"
// 0.8 or greater 	"B"
// 0.7 or greater 	"C"
// 0.6 or greater 	"D"

// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"


//decimal number, always valid, can be empty
//return string with grade
//0.7 => "C"
//0.9 => "A"
//0.6 => "D"

//1.1629594861776495 => "F"
//0.521470430885369 => "D"
//1.0313281167973467 => "A"
//0.9388416329922299 => "A"

function grader(score) {

  if(score > 1){ 
        return "F"
  }else if(score >= 0.9 && score <= 1){
        return "A"
  }else if(score >= 0.8 && score < 0.9){
        return "B"
  }else if(score >= 0.7 && score < 0.8){
        return "C"
  }else if(score >= 0.6 && score < 0.7){
        return "D"
  }else{
    return "F"
  }
}

    

//Codewars
function grader(score) {
  if (score>1||score<0.6) return 'F'
  if (score<0.7) return 'D'
  if (score<0.8) return 'C'
  if (score<0.9) return 'B'
  return 'A'
}


//Codewars
function grader(score) {
  if (score > 1 || score < 0.6) return 'F';
  else if (score >= 0.9) return 'A';
  else if (score >= 0.8) return 'B';
  else if (score >= 0.7) return 'C';
  else if (score >= 0.6) return 'D';
}