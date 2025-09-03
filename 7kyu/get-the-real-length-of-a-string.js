// Description:

// In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...), if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

// For example:

// The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.

// '🙉'.length // 2

// Write a function that returns the number of codepoints in a UTF-16 string.

// "abcd"   --> 4
// "🙉"     --> 1
// "😸🦌🚀" --> 3

//string with letters or emoji
//return the codepoint of string
//"↓→↑←" => 4
//"𨭎𩷶" => 2
//"😸🦌🚀" => 3
//"" => 0
//change string to array and return length


function getRealLength(string) {
    return [...string].length
}


//Codewars
const getRealLength = (string) => [...string].length;


//Codewars
const getRealLength = str => {
  let res = 0

  for (let s of str) res++

  return res
}


//Codewars
function getRealLength(str) {
  let count = 0;  
  for(const char of str) {
    count += 1;
  };
  return count;
};