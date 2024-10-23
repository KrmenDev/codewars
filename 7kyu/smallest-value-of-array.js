// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0


//array, at least 1 num, second argument a string
//if string == value return num || value == index return indx
//sort array lowest to highest return index or value



function min(arr, toReturn) { 
    let min = Math.min(...arr)
    return toReturn === 'value' ? min : arr.indexOf(min)
}



function min(arr, toReturn) { 
    if(toReturn === 'value'){
        return Math.min(...arr)
    }else if(toReturn === 'index'){
        return arr.indexOf(Math.min(...arr))
    } 
}



//Codewars
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));



//Codewars
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

