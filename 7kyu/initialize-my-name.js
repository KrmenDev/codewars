// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).


//string always first letter uppercase, can have only one name
//string capitalized middle names
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
//check if middle names, remove all letters except the first one, add a dot, return rest of string

function initializeNames(name){
    let arr = name.split(' ')
    return arr.map((e,i) => i == 0 || i == arr.length -1 ? e : e.slice(0,1).toUpperCase() + '.').join(' ')
  }





//Codewars
  function initializeNames(name){
    return name.split(' ').map((x,i) => (i==0||i==name.split(' ').length-1) ? x : x.slice(0,1).toUpperCase()+'.').join(' ')
  }




//Codewars
function initializeNames(name){
    var n = name.split(" ");
   if(n.length < 3) return name;
   for(i = 1; i < n.length-1; i++){
     n[i] = n[i][0] + ".";
   }
   return n.join(" ");
   }


//Codewars
const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')



//Codewars
function initializeNames(name){
    var arr = name.split(' ');
     for (var i = 1; i < arr.length - 1; i++) 
             arr[i] = arr[i].charAt(0) + '.';
     return arr.join(' ');
  }