// DESCRIPTION:
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
function sayHello( name, city, state ) {
}

//P: 3 strings, always a string, never empty, the length will vary, name is an array
//R: return concat string with one space between each
//E: ['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois') => 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
//P: pass array to string then concat name with city and state


function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}



//my Solution
function sayHello( name, city, state ) {
    let fullName = name.join('')
   return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}



//CodeWars
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


function sayHello( name, city, state ) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}


