// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

//P: string, case sensitive, can be empty
//R: correct string
//E: "prOgramMer" => "Hipster Craft Beer"
//E: "Pug" => "Beer"
//P: check if string matches and return correct string 


function getDrinkByProfession(param){
    let drink ;
    let str = param.toLowerCase();
        if(str == "jabroni"){
            drink = "Patron Tequila"
        } else if(str == "school counselor"){
            drink = "Anything with Alcohol"
        }else if(str == "programmer"){
            drink = "Hipster Craft Beer"
        }else if(str == "bike gang member"){
            drink = "Moonshine"
        }else if(str == "politician"){
            drink = "Your tax dollars"
        }else if(str == "rapper"){
            drink = "Cristal"
        }else{
            drink = "Beer"
        }
    return drink
}


//Codewars
function getDrinkByProfession(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return	"Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
  }


  
//Codewars
const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  
  const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"