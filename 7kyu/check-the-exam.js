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
    let result = 0
    array1.every((e,i) => e === array2[i] ? result += +4 : result += -1)
    return result
   }


   function checkExam(array1, array2) {
    let result = 0
    array1.every((e,i) => e === array2[i] ?  : result += -1)
    return result
   }

   .reduce((acc,c) => acc + c, 0)