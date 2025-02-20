// Description:

// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
// Examples

// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].



//two arr of integers, alway positive, never empty
//return the nums that are unique from the 2 arrs
//[1,2,2], [] => [1,2,2]
//[1,2,3], [1,2]) => [3]
//[1,2,2], [1] => [2,2]
// if arr a !includes num from arr b return arr


function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e))
}



//Codewars
function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }


  
//Codewars
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }


//Codewars
function array_diff(a, b) {

    var arr = new Array();
    
    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
  
    return arr;
}