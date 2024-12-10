// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


//two arrays always numbers, positive and negative
//a single arr without dups
// concat both arrays and filter the same num


function mergeArrays(a, b) {
    return Array.from(new Set(a.concat(b).sort((a, b) => a - b)))
  }
  


//Codewars
function mergeArrays(a, b) {
    let merge = [...a, ...b].sort()
    let unique = new Set(merge)
    return Array.from(unique).sort((a,b)=> a-b)
}



//Codewars
function mergeArrays(a, b) {
    // your code here
    const array = [...a, ...b].sort((a,b) => a-b)
    const answer = array.filter((item, index) => array.indexOf(item) === index)
    
    return answer
  }