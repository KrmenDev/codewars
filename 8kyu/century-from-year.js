// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples

function century(year) {
    // Finish this :)
    return;
  }


  //CodeWars
  function century(year) {
    return Math.ceil(year/100)
  }


  //CodeWars Best Practice
  const century = year => Math.ceil(year/100)


  //CodeWars
  const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;