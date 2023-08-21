// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false




//P: always string, numbers can be positive and negative, whole or floated, never empty, can have letters
//R: return a boolean if contains only numbers 4 or 6 digits
//E:
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// "000000" -->  true
//P:
// check if the length is 4 or 6
// if only contains numbers
// return true
//else false

function validatePIN (pin) {
    if(pin.length === 4 || pin.length === 6){
        //every tests whether all elements in the array pass the test implemented by the provided function 
     return [...pin].every(e => '0123456789'.includes(e))
    }else{
        return false
    }
  }



  //CodeWars
  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }


  //CodeWars
  function validatePIN (pin) {
    if (pin.length === 4 || pin.length ===6) {
      return pin.split('').every((num) => !isNaN(parseInt(num)));
    }
    return false;
  }