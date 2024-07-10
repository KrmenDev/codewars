// DESCRIPTION:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


//P: numbers, whole, positive
//R: if even number return number times eigh if not times nine
//E: 2 => 16
//E: 1 => 9
//E: 5 => 45
//P: if number is even multiply by 8 if not multiply by 9

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}


//CodeWars best practice
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

//codeWars
const simpleMultiplication = n => n * (n % 2 ? 9 : 8)