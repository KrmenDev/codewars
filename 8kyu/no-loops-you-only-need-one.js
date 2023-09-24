// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.


//My Solution


//P: Array, with a and x values, strings, numbers
//R: Return Boolean if a contains x
//E: [66, 101], 66 => true
//E: ['t', 'e', 's', 't'], 'e' => true
//E:['what', 'a', 'great', 'kata'], 'kat' => false
//P: check if a includes x

function check(a,x){
    return a.includes(x)
};





//CodeWars
check=(a,x)=>a.some(v=>v==x)



//CodeWars
check = (a,x) => a.indexOf(x) >= 0



//CodeWars
function check(a,x){
    let b = a.filter(el => el == x);
    return b.length ? true : false;
  };