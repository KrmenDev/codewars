// Description:

// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.
// Examples

//     [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 13+49=62 13 + 49 = 62 13+49=62 and the total weight of team 2 is 27 27 27.
//     [50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language) because the total weight of team 1 is 50+70=120 50 + 70 = 120 50+70=120 and the total weight of team 2 is 60+80=140 60 + 80 = 140 60+80=140.
//     [80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is 80 80 80 and the total weight of team 2 is 0 0 0.


//arr integers always positive, never empty
// arr with total of weight between teams 1 and 2
// [80] => [80,0]
//[100,50] => [100,50]
//[50,60,70,80] => [120,140]
// use filter to go though arr if even index add to team1 else team 2 reduce and return 



function rowWeights(array){
    let team1 = [array.filter((e, i) => i % 2 === 0).reduce((acc,c) => acc + c, 0)]
    let team2 = [array.filter((e, i) => i % 2 != 0).reduce((acc,c) => acc + c, 0)]
    return team1.concat(team2)
  }


//Codewars
function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }



//Codewars
function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
  }



//Codewars
rowWeights = arr => arr.reduce((a,b,i) => (a[i%2] += b,a),[0,0])


//Codewars
function rowWeights(array){
    var team1 = 0;
    var team2 = 0;
    array.forEach(function(element,index) {
      if(index % 2 == 0){
        team1 += element;
      }else{
        team2 += element;
      }
    });
    return [team1, team2];
  }