// Description:

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//number, always positive, always valid, can include zero?
//return the sum of angles in degrees
// 3 => 180
// 4 => 360
//to sum the interior angles use formula (n - 2) * 180,



function angle(n) {
  return (n - 2) * 180
}


//Codewars
const angle = n => (n - 2) * 180;


//Codewars
function angle(n) {
  return 180*(n-2);
}


//Codewars
function angle(n) {
  return (n - 2) * 180;
}