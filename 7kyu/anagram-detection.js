// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"
// write the function isAnagram


//My Solution
//P: two strings, case insensitive, always a string, always letters, never empty
//R: return a boolean if the 2 are anamgrms of each other
//E:
// "foefet" - "toffee" => true
// "Buckethead" - "DeathCubeK" => true
// "dumble" - "bumble" => false
// "apple" - "pale" => false
//P: conditionals and loops
// compare test, original if the same length 
// make everything lower case and compare each letter
// if they have the same letters return true
//else return false

var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort()
    original = original.toLowerCase().split('').sort()
    if(test.length !== original.length){
        return false
    }else {
        let result = true
        test.forEach((e,i)=> {
            if(e !== original[i]){
                result = false
            }
        })
        return result
    }
}


//CodeWars
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };