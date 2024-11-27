// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.
// Notes:

//     Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

//     If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

//     Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.


// Examples

// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

// Happy hacking!


//String, name uppercase and lowercase, can be string numbers or symbols
//two objects => the value of key
//Fahima", "Tash" => "Function T-Rex"
//"7393424", "Anumbha" => "Your name must start with a letter from A - Z." 
//"daisy", "petrovic" => "Data Payload"
//two obj firstName, surname
//grab the first letter of name and first of surname
//return the key value pair



function aliasGen(name, lastName){
    let nameFirstChar = name[0].toUpperCase()
    let surnameFirstChar = lastName[0].toUpperCase()

    if(firstName[nameFirstChar] && surname[surnameFirstChar]){
        return `${firstName[nameFirstChar]} ${surname[surnameFirstChar]}`
    }else{
        return 'Your name must start with a letter from A - Z.'
    }
}


//Codewars
const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}


//Codewars
function aliasGen(first,last){
    let auxFirst = first[0].toUpperCase( )
    let auxLast = last[0].toUpperCase( )
  
    if(firstName[auxFirst] && surname[auxLast]) {
      return firstName[auxFirst] + ' ' + surname[auxLast]
    } else {
      return 'Your name must start with a letter from A - Z.'
    }
  }



  //Codewars
  function aliasGen() {
    let fName = firstName[arguments[0][0].toUpperCase()]
    let sName = surname[arguments[1][0].toUpperCase()]
    return fName && sName ? `${fName} ${sName}` : `Your name must start with a letter from A - Z.`  
  }
  
  




