// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.


//My Solution


//P: Array nums, can be empty, positive numbers, whole nums
//R: Array with lowest num removed
//E: * Input: [1,2,3,4,5], output = [2,3,4,5]
//E: * Input: [5,3,2,1,4], output = [5,3,2,4]
//E: * Input: [2,2,1,2,1], output = [2,2,2,1]
//P: check each num in array
//P: Filter out the smallest integer
//P: Return array

function removeSmallest(numbers) {
    return numbers.filter((_,i)=> i !== numbers.indexOf(Math.min(...numbers)))
   }



//CodeWars
function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
  }


  
//CodeWars
function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
  }