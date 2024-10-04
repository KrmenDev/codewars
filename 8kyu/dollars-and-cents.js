// Description:

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10

// Good luck! Your team knows they can count on you!

//P: floated number and whole numbers, never empty, always positive
//R: a string with the floated num + $
//E: 39.99 => '$39.99' //5
//E: 99.9 => '$99.90' //4
//E: 100 => '$100.00' //3
//E: 72 => '$72.00' //2
//E: 8 => '$8.00 //1
//E: 11590 => '$1159.00'
//P: need to check if string contains a dot and if it has two char after return str else add one or two zeros


function formatMoney(amount){
    amount = amount.toString();
    const i = amount.indexOf(".");
    if(i === -1){
      return `$${amount}.00`;
    } else {
      return amount.slice(i + 1).length === 1? `$${amount}0` : `$${amount}`;
    }
  }



//Codewars
function formatMoney(amount){
    return '$' + amount.toFixed(2);
  }