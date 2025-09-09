// Description:

// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
// Examples

// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]


//array with names, can be empty? always valid?
//return array with first letter capitalized
//['noa', 'iris', 'lyla'] => ['Noa', 'Iris', 'Lyla']
//use map make all letters lowerCase and then change just first


function capMe(names) {

    return names.map((word) => word.toLowerCase()).map((word) => word.charAt(0).toUpperCase() + word.slice(1))

}


function capMe(names) {
    return names.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
}



//Codewars
function capMe(names) {
  return names.map(function (n) { return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase(); });
}


//Codewars
function capMe(names) {
  return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
}


//Codewars
function capMe(names) {
    return names.map(function(name) {return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();});
}
