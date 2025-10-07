// Description:
// Task

// You are given a dictionary-like object (implementation may vary by language) containing languages as keys and your corresponding test results as values. Return the list of languages where your score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)
// Examples

// Input object with key-value pairs:
// "Java" -> 10, "Ruby" -> 80, "Python" -> 65
// Ouput:
// [ "Ruby", "Python" ]

// Input object with key-value pairs:
// "Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
// Output:
// [ "Dutch", "Greek", "Hindi" ]

// Input object with key-value pairs:
// "C++" -> 50, "ASM" -> 10, "Haskell" -> 20
// Output:
// [ ]


//object with keys of languages
//return arr with languages > 60 in ascending order
//{"Java" : 10, "Ruby" : 80, "Python" : 65} => ["Ruby", "Python"]
//make obj into arr 
//filter keys > 60
//sort high to low
//return as arr

function myLanguages(results) {
    return Object.keys(results).filter((val) => results[val] > 59).sort((a,b) => results[b] - results[a])

}




//Codewars
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}



//Codewars
const myLanguages = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);




//Codewars
const myLanguages = results => 
  Object.entries(results)
        .sort((a,b)=> b[1] - a[1])
        .filter(i=> i[1] >= 60)
        .map(i => i[0])