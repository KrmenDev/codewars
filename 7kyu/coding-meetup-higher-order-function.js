// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.


// array of objects 
//return number or 0
//use conditional if key value is found return +1

function countDevelopers(list) {
    return list.filter((el) => el.continent === 'Europe' && el.language === 'JavaScript').length
  }


  //Codewars
  function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }


  //Codewars
  function countDevelopers(list) {
    return list
      .filter(dev => dev.language === "JavaScript")
      .filter(dev => dev.continent === "Europe")
      .length
  }


  //Codewars
  function countDevelopers(list) {
    return list.reduce((count, dev) => 
      (dev.continent === 'Europe' && dev.language === 'JavaScript')
        ? count + 1 : count
      , 0);
  }