// Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }

// Notes:

//     The order of the languages in the object does not matter.
//     The count value should be a valid number.
//     The input array will always be valid and formatted as in the example above.



//object with multy elements, always a lenguage property
//object lenguage name and count
//use map to loop the array and use dot notation to get the property

 
   function countLanguages(list) {
    var obj = {};
    list.forEach(e => obj[e.language] = (obj[e.language] || 0) + 1);
    return obj;
  }



  //Codewars
  function countLanguages(list) {
    return list.reduce(function(s, c) {
      
      if(c.language in s)
        s[c.language]++;
      else
        s[c.language] = 1;
    
      return s;
    }, {});
  }



  //Codewars
  function countLanguages(list) {
    // declare object to contain count for each language
    let langCount = {};
    
    
    // loop through each object in the array
    for (let i = 0; i < list.length; i++) {
    
      // find language for each developer
      // add language to object if it does exist
      if (langCount[list[i].language] === undefined) {
        langCount[list[i].language] = 1;
      } else {
        // otherwise increment language count by 1
        langCount[list[i].language]++;
      }  
    }
    
    // return object
    return langCount;
  }
 