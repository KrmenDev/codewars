// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).


//string including spaces and special chars, number always positive
//no using * operator
//Total of chars including spaces and special chars * price
//"Jeong-Ho Aristotelis" => 600
//"Hadufuns John",20 => 260
//"Werner Vígi",15 => 165

// function billboard(name, price = 30){
//     let operation = name.length * price
//     return operation
// } 

function billboard(name, price = 30){
    let result = 0
    for(let i = 1; i <= name.length; i++){
        result += price
    }
    return result
} 



//Codewars
function billboard(name, price = 30) {
    return name.split('').reduce((sum, letter) => sum + price, 0); 
  }



//Codewars
const billboard = (name, price = 30) => +(name.length / (1 / price))