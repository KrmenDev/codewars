// DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.



//My Solution
//P: list of strings, always a string, array, can have string of num
//R: array of string names with 4 letters
//E: friends ["Ryan", "Kieran", "Mark"] => ["Ryan", "Mark"]
// ["Ryan", "Jimmy", "123", "4", "Cool Man"] => ["Ryan"]
// ["Love", "Your", "Face", "1"] =>  ["Love", "Your", "Face"]

   
function friend(friends){
    //loop to check each word in array to see if it has 4 char
    const trueFriend = friends.filter((word) => word.length == 4)
    // return the words in a new array with the truthy val
    return trueFriend
  }
