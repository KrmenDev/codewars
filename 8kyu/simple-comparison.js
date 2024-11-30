// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().


//two values a string and number
//return boolean if the string and number are the samer char
//'1', 1 => true
//1, '0' => false


function add(a, b){
	return a == b ? true : false
}


//Codewars
function add(a, b){
	return a == b 
}


//Codewars
function add(a, b){
    if((+a)==(+b)){
        return true
    }else{
        return false
    }
}