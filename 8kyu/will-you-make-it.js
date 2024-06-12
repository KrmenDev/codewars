// DESCRIPTION:
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
};


  //P: distance to pump, miles per gallon to get there, fuel left
  //R: Should return a boolean / true if we make it or false if we dont
  //E: (50, 25, 2) => true
  //E: (100, 50, 1) => false
  //P: multiply fuel left by mpg and if the result is bigger or equal to distance to pump return true

  const zeroFuelA = (distanceToPump, mpg, fuelLeft) => {
      return fuelLeft * mpg >= distanceToPump ? true : false
  };


  //codeWars Best
  const zeroFuelB = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };


  //CodeWars
  const zeroFuelC = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;