// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// return masked string
function maskify(cc) {

}


//My Solution
//P: always a string, if empty return empty, 
//R: return every char replaced with # except 4 last, if only 1,2,3,4 char return them
    //itirate though each character in string
    //replace all - last 4
    //return string
function maskify(cc) {
    return cc.length <= 4 || cc === '' ? cc : cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

//E:
console.log(maskify('11111'), '#1111')
//"4556364607935616" --> "############5616"
//"64607935616" -->      "#######5616"
//"1" -->                "1"
//"" -->                 ""

//CodeWars Best
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }



//CodeWars
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
  }

  //The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length.