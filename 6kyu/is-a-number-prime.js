// Description:

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Requirements

//     You can assume you will be given an integer input.
//     You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
//     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// Example

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


//number, can be positive and negative
//return true or false if the number is prime
//0 => false
//73 => true
//-1 => false
//2 => true
//prime numbers must be greater than 1
// 2 is the only prime number, even numbers greater than 2 are not prime
//Check for divisibility by odd numbers from 3 up to the square root of num.

function isPrime(num) {
  if(num === 2 ){
    return true}

  if(num <= 1 || num % 2 === 0){
    return false}

  for(let i = 3; i <= Math.sqrt(num); i+=2){
    if(num % i === 0){
        return false
    }
  }
    return true

}



//Codewars
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



//Codewars
function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1
}



//Codewars
function isPrime(n) {
	if (n <= 1)
  	return false;
  if (n <= 3 || n == 5 || n == 7 || n == 11)
    return true;
  if (n % 2 === 0 || n % 3 === 0)
  	return false;
  for (var i = 5; i <= Math.pow(n, 0.5); i += 6)
  	if (n % i === 0 || n % (i + 2) === 0)
    	return false;
  return true;
}