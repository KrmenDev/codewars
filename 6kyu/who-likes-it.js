// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:


// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"




//My Solution

//P: Array, strings, can be empty, only strings
//R: String with up to 3 names and 2 plus a count if more
//E: [] -->  "no one likes this"
//E: ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//P: use a conditional if length 0 return string
//P:use a lopp to sum the index of array if more than 3 names

function likes(names) {
    if(names.length == 1){
        return `${names[0]} likes this`
    } else if(names.length == 2){
        return `${names[0]} and ${names[1]} like this`
    } else if(names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length >= 4){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } else if(names.length == 0){
        return "no one likes this"
    }
  }



//My Solution
function likes(names) {
    switch(names.length){
        case 0:
            return "no one likes this"; break;
        case 1:
            return `${names[0]} likes this`; break;
        case 2:
            return `${names[0]} and ${names[1]} like this`; break;
        case 3: 
            return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; break;
    }    
  }



//CodeWars
function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }




//CodeWars
function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }



//CodeWars
function likes (names) {
    var templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    
    return templates[idx].replace(/{name}|{n}/g, function (val) {
      return val === '{name}' ? names.shift() : names.length;
    });
  }