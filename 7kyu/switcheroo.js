// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


// string lowercase letters, never empty
// switch a to b and b to a
//'abc' => 'bca'
//'aaabcccbaaa' => 'bbbacccabbb'
// go trough string if a replace with b and if b replace with a


function switcheroo(x){
    return x.split('').map((e) => e == 'a' ? 'b' : e == 'b' ? 'a': e).join('')
}


//Codewars
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")


//Codewars
function switcheroo(x){
    return x.split('').map(function(e){
      if (e =='b')return 'a';
      if (e == 'a') return 'b';
      if(e=='c') return 'c'
    }).join('');
  }

