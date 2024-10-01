// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//P:string, never empty
//R: 'I like ${template}!'
//E:Chocolate' => 'I like Chocolate!'
//'Cheese','Milk' => 'I like Cheese, Milk!
//P: return the template string with the correct format

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

  

//Codewars
const buildString = (...template) => `I like ${template.join(', ')}!`;