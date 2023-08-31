// DESCRIPTION:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.



//My solution

//P: always a string, never empty, always letters, symbols?, numbers?
//R: string with unique words
//E:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' => 'alpha beta gamma delta'
// 'beta beta gamma gamma' => 'beta gamma'
//P: separate each word with split with a comma between spaces
//new string with word 
//if next word == the same dont put it in new string
//return new string

function removeDuplicateWords (s) {
    let newS = []
    s.split(' ').forEach((word) => {
        if(!newS.includes(word)) {
            newS.push(word)
          }
    })
    return newS.join(' ')
  }




//CodeWars
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')




//CodeWars
const removeDuplicateWords = s => {
    const set = new Set(s.split(' '));
    return Array.from(set).join(' ');
  }