// Description:

// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

//arr with nums
// return 'yes, ascending', 'yes, descending' or 'no'
// [1, 2] => 'yes, ascending'
// [15, 7, 3, -8] => 'yes, descending'
// [4, 2, 30] => 'no'
// use every method to test whetear all elements in arr are sorted
//if the number is higher than the next one is ascending, if the element is lower is descending else not sorted


function isSortedAndHow(array) {
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] <= array[i+1]){
             return 'yes, ascending'
        }else if(array[i] >= array[i+1] && array[i+1] >= array[1+2]){
            return 'yes, descending'
       }else{
            return 'no'
       }
    }
}


//Codewars
function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }


//Codewars
const isSortedAndHow = array => {
  let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
  let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
  
  return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}


//Codewars
const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
  }


//Codewars
function isSortedAndHow(array){
	var ans;
	if (array[1] > array[0]){
		ans = "yes, ascending";
	}

	if (ans==="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]>= array[i-1]){
				ans = "yes, ascending";
			} else return ans = "no";
		}
	}
	if (ans!=="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]<= array[i-1]){
				ans = "yes, descending";
			} else return ans = "no";
		}		
	}
	return ans;
}