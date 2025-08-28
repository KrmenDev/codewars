// Description:

// In an infinite array with two rows, the numbers in the top row are denoted

// . . . , A[−2], A[−1], A[0], A[1], A[2], . . .

// and the numbers in the bottom row are denoted

// . . . , B[−2], B[−1], B[0], B[1], B[2], . . .

// For each integer k, the entry A[k] is directly above the entry B[k] in the array, as shown:
// ...	|	A[-2]	|	A[-1]	|	A[0]	|	A[1]	|	A[2]	|	...
// ...	|	B[-2]	|	B[-1]	|	B[0]	|	B[1]	|	B[2]	|	...

// For each integer k, A[k] is the average of the entry to its left, the entry to its right, and the entry below it; similarly, each entry B[k] is the average of the entry to its left, the entry to its right, and the entry above it.

// Given A[0], A[1], A[2] and A[3], determine the value of A[n]. (Where range of n is -1000<n<1000)

// Test Cases are called as an array of ([A[0], A[1], A[2], A[3]], n)

// Hint: Calculate B[k]



//Codewars
const findA = ([a, b, c, d], n) =>
  n === 0 ? a : n < 0 ? findA([d, c, b, a], 3 - n) : findA([b, c, d, 6n*d - 10n*c + 6n*b - a], n - 1)




//Codewars
function index(xs,i) { for ( const x of xs ) if ( ! i-- ) return x }

function findA(as,i) {
  function* allAs() {
    yield* as;
    const gen = allAs();
    let a0 = gen.next().value;
    let a1 = gen.next().value;
    let a2 = gen.next().value;
    for ( const a3 of gen )
      yield 6n * a3 - 10n * a2 + 6n * a1 - a0,
      a0 = a1,
      a1 = a2,
      a2 = a3;
  }
  return i < 0 ? findA( Array.from(as).reverse(), 3-i ) : index( allAs(), i ) ;
}


//Codewars
function findA(aaaa, n) {
  if (n>=0 && n<=3) return aaaa[n];
  let [a0,a1,a2,a3] = aaaa;
  let [b1,b2] = [a1*3n-a0-a2, a2*3n-a1-a3];
  let [b0,b3] = [b1*3n-a1-b2, b2*3n-a2-b1];
  if (n<0){
    let [a,b,aa,bb] = [a0,b0,a1,b1];
    while (n++<0) [a,b,aa,bb] = [a*3n-aa-b, b*3n-bb-a, a,b];
    return a;
  } else {
    let [a,b,aa,bb] = [a3,b3,a2,b2];
    while (n-->3) [a,b,aa,bb] = [a*3n-aa-b, b*3n-bb-a, a,b];
    return a;
  }
}