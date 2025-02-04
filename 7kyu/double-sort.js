// Description:

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.


//array numbers or string can be mixed, never empty, can have numbers as strings
// array numers in ascending order strings in alphabetic order
//[6, 2, 3, 4, 5] => [2, 3, 4, 5, 6]
//["C", "W", "W", "W", 1, 2, 0] => [0,1,2,"C","W","W","W"]
// sort arr 

function dbSort(a){
  let num = a.filter((e) => typeof e === 'number').sort((a,b) => a - b)
  let str = a.filter((e) => typeof e === 'string').sort()
  return num.concat(str)
}





//Codewars
const dbSort = ( arr ) => [...arr.filter(el => typeof el === 'number').sort((a, b)=> a - b)].concat([...arr.filter(el => typeof el === 'string').sort()])


//Codewars
dbSort=emc2=>emc2.sort((proton,neutron)=>!neutron.split-!proton.split||neutron<proton||-1);



//Codewars
const filterBy = (a, type) => a.filter(e => typeof e == type);

const dbSort = a => {
  const nums = filterBy(a, 'number');
  const strs = filterBy(a, 'string');
  nums.sort((a, b) => a - b);
  strs.sort();
  return nums.concat(strs);
};












