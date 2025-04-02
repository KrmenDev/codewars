// Description:

//     Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

//     Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
//     Adults have 21 or more.

// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//number, always positive, never empty whole nums
//string with type od drink
//switch


  function peopleWithAgeDrink(old) {
    if(old < 14){
        return "drink toddy";
    }else if(old < 18){
        return  "drink coke"
    }else if(old < 21){
        return "drink beer"
    }else{
        return "drink whisky"
    }
  };


//Codewars
const peopleWithAgeDrink = (age) =>
    age < 14 ? "drink toddy" :
    age < 18 ? "drink coke" :
    age < 21 ? "drink beer" : "drink whisky"


//Codewars
function peopleWithAgeDrink(age){
	if(age < 14)
		drink = 'toddy';
	else if(age < 18)
		drink = 'coke'
	else if(age < 21)
		drink = 'beer';
	else if(age => 21)
		drink = 'whisky';

	return 'drink ' + drink;
}


//Codewars
var drinksPerAge = [
    [ 14, "toddy" ],
    [ 18, "coke" ],
    [ 21, "beer" ],
    [ Number.MAX_VALUE, "whisky" ]
  ];
  
  const peopleWithAgeDrink = old => "drink " + drinksPerAge.reduce((a, b) => a == "" && old < b[0] ? b[1] : a, "");

  

//Codewars
function peopleWithAgeDrink(old) {
    switch (true) {
      case old < 14 : return "drink toddy";
      case old < 18 : return "drink coke";
      case old < 21 : return "drink beer";
      default: return "drink whisky";
    }
  };