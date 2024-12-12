// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]


//arr with numbers, never empty
//return highest and second highest
//[1,5,87,45,8,8] => [45, 87]
//[6,5,83,5,3,18] => [18, 83]
//sort the array and from highest to lowest
//return 0 and 1 index


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort((a,b) => b - a).slice(0,2).reverse()
}



//Codewars
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }




//Codewars
function twoOldestAges(ages){
    var x = ages.sort(function(i,j) { return j-i;});
    return [x[1],x[0]];
  }