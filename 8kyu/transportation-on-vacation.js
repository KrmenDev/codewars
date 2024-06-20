// DESCRIPTION:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


//My Solution
//P: num of days, always a num, positive num, never empty, whole num
//40 = 1 day, 7 days get -50, 3 days = -20
//R: return total depending of the days
// if 1 day or 2 days => * 40
// if > 2 => -20
// if > 6 => -50 

//E: 6 => 220 (6 * 40 - 20) 
//E: 7 => 230 (7 * 40 - 50)
//E: 3 => 100 (3 * 40 -20)
//P:multiply d * 40 if d >= 3 -20 if else >=7 -50 

function rentalCarCost(d) {
  return d >=7 ? (d * 40) - 50 : d >= 3 ? (d * 40) - 20 : d * 40
}



function rentalCarCost(d) {
    //conditional
    //multiply d x 40
    //if day is more than 3 or 7 - 20 or 50
    if(d < 3){
        return d * 40
    } else if (d < 7 ){
        return (d * 40) -20
    } else if (d >= 7 ){
        return (d * 40) -50
    }
  }


//CodeWars Best
function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }



//CodeWars
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0))


//CodeWars
function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }