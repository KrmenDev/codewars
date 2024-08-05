// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


//P: two strings, never empty, name and position
//R: if owner == name return 'Hello boss' else "Hello guest"
//E: 'Dan', 'Dan' => 'Hello boss'
//E: 'Greg', 'Dan' => 'Hello guest'
//P: use a conditional to see if name and owner are the same if so return hello boss, else hello guest


function greet (name, owner) {
  return name == owner ? 'Hello boss' : 'Hello guest'
}

  //My Solution
  function greet (name, owner) {
    if (name === owner){
        return 'Hello boss'
    }else {
        return 'Hello guest'
    }
  }

  //CodeWars Best Practice
  function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
  }