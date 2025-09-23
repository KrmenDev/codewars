// Description:

// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
//   ["name2", 110, ["B", "A", "A", "A"]],
//   ["name3", 200, ["B", "A", "A", "C"]],
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];

// The scores for each grade is:

//     A: 30 points
//     B: 20 points
//     C: 10 points
//     D: 5 points
//     Everything else: 0 points

// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
//   ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
//   ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
//   ,
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];


//array with names and points, then array with score strings
//return the hacked names
//if score is > 200 grab name and push to hacked array
//sum all letters inside arr
//     A: 30 points
//     B: 20 points
//     C: 10 points
//     D: 5 points
//     Everything else: 0 points
//if 5 or more B or A add extra 20 200 is max
//if res is less of score return name
//sum letters
//compare to score


//Codewars
function findHack(arr) {
  let result  = []

  for (let i = 0; i < arr.length; i++) {

    let res = arr[i][2].map(el => el === 'A' ? el = 30 : el === 'B' ? el = 20 : el === 'C' ? el = 10 : el === 'D' ? el = 5 : el = 0)

    let points = res.reduce((acc, c) => acc + c, 0)
    res.length >= 5 && res.every(el => el >= 20) ? points += 20 : arr[i][1]

    if(arr[i][1] > 200 || points < arr[i][1]) result.push(arr[i][0])
  }
  
  return result
}



//Codewars
function findHack(arr) {
  let score = {
    A: 30,
    B: 20,
    C: 10,
    D: 5
  }
  function calc(a){
    let bonus = (a.length >= 5 && a.every(g => g == 'A' || g == 'B')) ? 20 : 0;
    return a.map(g => score[g] || 0).reduce((a,b)=>a+b,0)+bonus;
  }
  return arr.filter(a => {
    return a[1] > 200 || calc(a[2]) !== a[1];
  }).map(a => a[0]); 
}


//Codewars
function findHack(arr) {
  const scores = { A : 30, B : 20, C : 10, D : 5 }
  
  return arr.filter(([name, points, grades]) => {
    const bonus = grades.every(e => 'AB'.includes(e)) && grades.length > 4 ? 20 : 0 
    const score = grades.reduce((a,c) => a + (scores[c] || 0), 0) + bonus
    
    return points > 200 || score !== points
  }).map(([name]) => name)
}


//Codewars
function findHack(arr) {
  const scoreData = {
  "A": 30,
  "B": 20,
  "C": 10,
  "D": 5
}

  let result = []
  for(let i=0;i<arr.length;i++){
    let writedScore = arr[i][1]
    let scoreMultiplier = arr[i][2].filter(el=>el==='B'||el==='A').length>=5?20:0
    let realScore = arr[i][2].reduce((a,c)=>a+(scoreData[`${c}`]?scoreData[`${c}`]:0),0) + scoreMultiplier
    if(realScore<writedScore||writedScore>200){
      result.push(arr[i][0])
    }
  }
  return result
}