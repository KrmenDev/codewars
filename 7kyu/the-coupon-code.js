// DESCRIPTION:
// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

////////////////////////////////////////////////////////////

//My Solution

//P: Always a string, numbers, letters, symbols, lower and upper case, never empty
//R: Boolean if coupon valid
//E: 
//// "123", "123", "July 9, 2015", "July 9, 2015")  ===  true
//// "123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//P: Conditionals
//check if the first part of the string matches
// then check the date
// If the date is one day after
//return boolean

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }


  

//CodeWars  
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }




//CodeWars
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var cd = new Date(currentDate);
    var ed = new Date(expirationDate);
    return (enteredCode === correctCode) && (ed >= cd);
  }