// Safen User Input Part I - htmlspecialchars

// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).
// Mission

// Your mission is to implement a function that converts the following potentially harmful characters:

//     < --> &lt;
//     > --> &gt;
//     " --> &quot;
//     & --> &amp;

//String from form with special chars
//chech each char if contains special char convert
//replace all special chars

function htmlspecialchars(formData) {
let replaceChar = {
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    '&' : '&amp;'
}
    return formData.split('').map((char) => replaceChar[char] || char).join('')

  }


//Codewars
function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
  }


//Codewars
function htmlspecialchars(formData) {
    // Insert your code here
    let harmfulCharactersResult = '';
    for (let i = 0; i < formData.length ; i++){
      if (formData[i] === '<'){
        harmfulCharactersResult += '&lt;'
      } else if (formData[i] === '>'){
        harmfulCharactersResult += '&gt;'
      } else if (formData[i] === '"'){
        harmfulCharactersResult += '&quot;'
      } else if (formData[i] === '&'){
        harmfulCharactersResult += '&amp;' 
      } else {
        harmfulCharactersResult += formData[i]
      }
    }
    return harmfulCharactersResult;
  }
