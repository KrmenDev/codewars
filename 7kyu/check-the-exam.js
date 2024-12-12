// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0



//Two arrays, never empty, numbers includes 0
//if the same num +4 if not -1 if empty or 0 return 0


   function checkExam(array1, array2) {
        let result = []
        array1.forEach((e,i) => array2[i] == "" ? 0 : e === array2[i] ? result.push(4) : result.push(-1))
        if(result.reduce((acc,c) => acc + c, 0) < 0){
            return 0
        }else{
            return result.reduce((acc,c) => acc + c), 0
        }
   }



//Codewars
function checkExam(array1, array2) {
    var score = 0; 
      for (var i = 0; i < array1.length; i++){  
        if (array1[i] == array2[i]) {    
        score += 4;     
        }
          else if (array2[i] === ""){
              score += 0
          }    
        else {        
        score -= 1       
        }      
      }     
      if (score < 0) {      
        score = 0        
      }       
     return score
     
    }



//Codewars
function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
      if (e === "") {
        return a;  
      }
      
      if (e === array1[idx]) {
        return a += 4;
      }
      
      return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
  }


  
//Codewars
checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;