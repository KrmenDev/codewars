// DESCRIPTION:
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    return 0;
  }

  //My solution
  function litres(time) {
    return Math.floor(time * 1 / 2 )
  }


//CodeWars Best Practice
    function litres(time) {
    return Math.floor(time * 0.5);
  }


  // Codewars 2
  function litres(time) {
    return Math.floor(time/2);
  }

//Codewars
    litres = t => ~~(t / 2);
    // the ~~ means is not not, but it rounds number due to bit shift, It removes everything after the decimal point. This works whether the operands are (floating-point) numbers or strings, and the result is a number.
   // In other words, it yields:

//  function(x) {
//      if(x < 0) return Math.ceil(x);
//      else return Math.floor(x);
//  }

  