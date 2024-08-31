// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


//P: array of numbers, never empty, can be negative
//R: the smallest number
//E: [1,56,232,12,8] => 1
//E: [78,56,232,12,0] => 0
//P: sort array and return smallest


function findSmallestInt(arr) {
  return Math.min(...arr);
}


//My solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b){
        return a - b; })
      return args[0];
    }
  }

  //CodeWars Best Practice
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

  //CodeWars
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce(function(prev, curr, index, array) {
        return prev < curr ? prev : curr;
      });
    }
  }