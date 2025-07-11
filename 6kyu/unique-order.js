// Description:

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//string, lower and uppercase, numbers, always positive?
//return all unique elements in arr
//return a list of chars removing only those that are the same next to each other

var uniqueInOrder=function(iterable){
    let res = []
    let prev 

    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] != prev){
            res.push(iterable[i])
            prev = iterable[i]
        }
    }
    return res
}




//Codewars
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}



//Codewars
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}



//Codewars
var uniqueInOrder = function (iterable)
{
	return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}