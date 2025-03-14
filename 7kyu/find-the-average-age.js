// Description:

// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

//     The input array will always be valid and formatted as in the example above.
//     Age is represented by a number which can be any positive integer.


//arr, object, always valid formatted
// return average of list.age rounded to the nearest num
//var list2 = [
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
// ]; => 21




function getAverageAge(list) {
    let sum = list.reduce((acc,c) => acc + c.age, 0)
    return Math.round(sum / list.length)
  }




//Codewars
function getAverageAge(list) {
    return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
  }


  
//Codewars
function getAverageAge(list) {
    let count = 0;
    let sum = 0;
    
    for (let dev of list) {
      count++;
      sum += dev.age;
    }
    
    return Math.round( sum / count );
  }



//Codewars
function getAverageAge(list) {

    var total_years = 0;
  
    for (i = 0; i < list.length ; i++) { 
      total_years += list[i].age;
    }
    
    return Math.round(total_years / list.length);
  }