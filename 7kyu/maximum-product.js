// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
// Examples

//     [1, 2, 3] returns 6 because the maximum product is obtained from multiplying  2∗3=6\ 2 * 3 = 6  2∗3=6
//     [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying  5∗10=50\ 5 * 10 = 50  5∗10=50
//     [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying  −2∗7=−14\ -2 * 7 = -14  −2∗7=−14


// array numbers positive and negative, and zeroes
// return the maximum product of two adjacent nums
//[5, 8] => 40
//[1, 2, 3] => 6
//[3, 6, -2, -5, 7, 3] => 21
//loop arr multiply pair add to new arr, return highest


function adjacentElementsProduct(array) {
    let max = []
    for(let i = 0; i < array.length -1; i++){
        max.push(array[i] * array[i+1])
    }
    return Math.max(...max)
  }




//Codewars
function adjacentElementsProduct(a) {
    return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
  }



//Codewars
function adjacentElementsProduct(array) {
    let max = array[0] * array[1]
    for (let i = 1; i < array.length - 1; i++) {
      max = Math.max(max, array[i] * array[i + 1])
    }
    return max
  }