// Description:

// Some integral numbers are odd. All are more odd, or less odd, than others.

// Even numbers satisfy n = 2m ( with m also integral ) and we will ( completely arbitrarily ) think of odd numbers as n = 2m + 1.
// Now, some odd numbers can be more odd than others: when for some n, m is more odd than for another's. Recursively. :]
// Even numbers are always less odd than odd numbers, but they also can be more, or less, odd than other even numbers, by the same mechanism.
// Task

// Given a non-empty finite list of unique integral ( not necessarily non-negative ) numbers, determine the number that is odder than the rest.
// Given the constraints, there will always be exactly one such number.
// Examples

// oddest([1,2]) => 1
// oddest([1,3]) => 3
// oddest([1,5]) => 5


//Codewars
const maxBy = require('lodash/maxBy');

function oddest(xs) {
  return maxBy(xs, x => [...(x >>> 0).toString(2)].reverse());
}



//Codewars
const maximumBy = cmp => a => a.reduce( (v,w) => cmp(v,w)>=0 ? v : w ) ;
const order = (v,w) => (v&1) - (w&1) || order( v>>1, w>>1 ) ;
const oddest = maximumBy(order) ;



//Codewars
const cmp = (a, b) => {

  if (a % 2 && b % 2)
    return cmp((a - 1) / 2, (b - 1) / 2);
  
  if (a % 2 || !b)
    return -1;
  
  if (b % 2 || !a)
    return 1;
    
  return cmp(a / 2, b / 2);

};

const oddest = a => a.slice().sort(cmp)[0];