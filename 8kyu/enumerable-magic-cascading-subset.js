// Description:

// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  

// As you can see, the lists are cascading; ie, they overlap, but never out of order.



//Array of numbers, always valid, never empty
//return array of grouped n amount of nums
//[3, 5, 8, 13], 0 => [3, 5, 8, 13]
//[3, 5, 8, 13], 1 => [[3], [5], [8], [13]]
//[3, 5, 8, 13], 2 => [[3,5], [5,8], [8,13]]
//loop arr and use slice to cut arr into n parts
//push to result and return

function eachCons(array, n) {
	let res = []
    for(let i = 0; i <= array.length - n; i++){
        res.push(array.slice(i, i + n))
    }
    return res
}


//Codewars
function eachCons(array, n) {
  let cascadingSubset = [];
  for( i = 0; i <= array.length - n; i++){
    cascadingSubset.push(array.slice(i, i + n ));
  }
	return cascadingSubset;
}



//Codewars
function eachCons(array, n) {
  let res = [];
  
  for(let i = 0; i < array.length; i++){
    res.push(array.slice(i,i + n));
  }
  
	return res.filter(e => e.length === n);
}



//Codewars
function eachCons(array, n) {
	return array.map((x,y) => array.slice(y, y + n)).filter(x => x.length == n)
}