// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


//My saolution

//P:Array, strings, never empty, never integers
//R: A string either 'fail', 'publish', 'I smell a series!'
//E: ['bad', 'bad', 'bad'] => 'Fail!'
//E: ['good', 'bad', 'bad', 'bad', 'bad'] => 'Publish!
//E: ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'] => 'I smell a series!')
//P: check each elem in array
// if 1 or 2 return 'Publish!'
// else if more than 2 return 'I smell a series!
// if 0 ideas return 'Fail!'


function well(x){
    let count = x.map((word) => word === 'good').filter(Boolean)
        if(count.length == [] || null ){
            return 'Fail!'
        } else if (count.length <= 2){
            return 'Publish!'
        }else if(count.length  > 2){
            return 'I smell a series!'
        }
}



//CodeWars
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }



//CodeWars
function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}




//CodeWars
function well(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
  }