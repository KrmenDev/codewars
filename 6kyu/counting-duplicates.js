// Description:
// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


//P: string characters letters and numbers, lowercase and uppercase, can be empty
//R: number, that shows how many unique repeated characters
//E: "" => 0
//E: "aabAB" => 2
//P: check each letter on string, if each character has more than one return then count how many repeated letters


  function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort()
    let duplicates = []
    
    for(i=0; i < arr.length; i++){
        // if the current element equals the following element the push it to the new array AND
       // ONLY if the new array doesn't already include the current element
        if(arr[i] === arr[i+1] && !duplicates.includes(arr[i])){
            duplicates.push(arr[i])
        }
    }
    return duplicates.length
  }



//Codewars
  function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }

