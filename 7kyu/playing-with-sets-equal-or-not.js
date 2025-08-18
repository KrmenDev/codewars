// // Description:

// // Set objects are new JavaScript built-in objects defined since ECMAScript 2015

// // A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .
// // Equality

// Two sets ( A, B ) are considered "equal" if all elements of A are elements of B and all elements of B are elements of A no matter "order" of elements.
// Examples:

//   {1, 2} == {2, 1}
//   {1, 2} != {1, 2, 3}

// Task

// Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false depending if these 2 sets are "equal" (respectively not equal) ie : if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.
// Examples:

// A  = new Set([1,2]);
// A2 = new Set([2,1]);
// B  = new Set([2,3]);

// areEqual(A,B)  // -> false
// areEqual(A,A2) // -> true
// notEqual(A,B)  // -> true

//Two sets, can be empty, always valid
//return true if the sets are equal
// {1,2,3}, {3,2,1} => true
// {1,2,3}, '1','2','3'} => false
// {1,2,3}, {} => false
// {3,2,1}, {1,2,3} => true
//check every element on s1 if s2 has it


function areEqual(s1, s2){
    return [...s1].every((e) => s2.has(e)) && [...s2].every((e) => s1.has(e))
}

function notEqual(s1, s2){
    return !areEqual(s1,s2)
}



//Codewars
const areEqual = (s1,s2) => s1.size === s2.size && [...s1].every(e => s2.has(e));
const notEqual = (s1,s2) => !areEqual(s1,s2);




//Codewars
function areEqual(s1, s2){
  return [...s1].every(x => s2.has(x)) && [...s2].every(x => s1.has(x));
}

function notEqual(s1, s2){
  return !areEqual(s1, s2);
}



//Codewars
function areEqual(s1, s2){
  if (s1.size != s2.size) return false;
  for (let el of s1) {
    if (!s2.has(el)) {
      return false;
    }
  }
  for (let el of s2) {
    if (!s1.has(el)) {
      return false;
    }
  }
  return true;
}

function notEqual(s1, s2){
  // ...
  if(s1.size != s2.size) return true;
  for(el of s1){
    if (!s2.has(el)) return true
  }
  for(el of s1){
    if(s2.has(el)) return false
  }
  
}