// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
function findNeedle(haystack) {
    // your code here
  }


  //My solution
  function findNeedle(haystack) {
    let needle = haystack.findIndex(i => i === 'needle')
    return `found the needle at position ${needle}`
  }


  //CodeWars best practice
  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }


  //CodeWars
  const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;