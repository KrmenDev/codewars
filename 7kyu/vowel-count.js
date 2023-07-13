// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    return 0;
  }

  //My Solution
  function getCount(str) {
    let vowels = str.split('').filter(vowel => vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u')
    return vowels.length
  }
  console.log(getCount("abracadabra"), 5)

  
  //CodeWars Best Practice
  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  //CodeWars 2 Best Practice
  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

