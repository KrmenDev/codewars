// Description:

// The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

// But it's not working properly.
// Notes

// There are 3 attributes

//     name
//     age
//     sex ('M' or 'F')

// When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.
// Examples

//     Hello.
//     Hello. My name is Bob. I am 27. I am male.
//     Hello. I am 27. I am male. My name is Bob.
//     Hello. My name is Alice. I am female.
//     Hello. My name is Batman.

// Task

// Fix the code so we can all go home early.


//Codewars
class Dinglemouse {

    constructor() {
        this.output = {}
    }

    setAge(age) {
        this.age = age
        this.output.age = `I am ${this.age}.`
        return this
    }

    setSex(sex) {
        this.sex = sex
        this.output.sex = `I am ${sex == 'M' || 'm' ? "male" : "female"}.`
        return this
    }

    setName(name) {
        this.name = name
        this.output.sex = `My name is ${name}.`
        return this
    }

    hello() {
        return `Hello.` + Object.values(this.output).join('')
    }

}



//Codewars
class Dinglemouse {
  constructor() {
    this.vals = {}
  }

  setSex(sex) {
    this.vals.sex = `I am ${sex == 'F' ? 'fe' : ''}male.`
    return this
  }
  
  setName(name) {
    this.vals.name = `My name is ${name}.`
    return this
  }
  
  setAge(age) {
    this.vals.age = `I am ${age}.`
    return this
  }

  hello() {
    return ['Hello.', ...Object.values(this.vals)].join(' ');
  }
}



//Codewars
class Dinglemouse {
    setAge(age) 
    { this.age = age; 
        return this 

    }
    setSex(sex) 
    { this.sex = sex; 
        return this 

    }
    setName(name) 
    { this.name = name; 
        return this 

    }
    hello() {
         return Object.keys(this).reduce((a,c) => a += ' '+(c=='name' ? `My name is ${this.name}.` : c=='age' ? `I am ${this.age}.` : `I am ${this.sex == 'M' ? "male" : "female"}.`),'Hello.'); }
}



//Codewars
class Dinglemouse {

    constructor() {
      this.name = null
      this.age = null
      this.sex = null
      
      this.nameText = () => `My name is ${this.name}.`
      this.ageText = () => `I am ${this.age}.`
      this.sexText = () => `I am ${this.sex}.`
      
      this.nameSet = false
      this.ageSet = false
      this.sextSet = false
      
      this.output = [() => 'Hello.']
    }

    setAge(age) {
      // Set age
      this.age = age
      // Check for edge cases and age instantiation
      if(!age || this.ageSet) {
        return this
      }
      // Update array and set text state
      this.output.push(this.ageText)
      this.ageSet = true
      return this
    }

    setSex(sex) {
      // Set sex
      this.sex = sex === "M" ? 'male' : (sex === "F" ? 'female' : null)
      // Check for edge cases and sex instantiation
      if(!sex || this.sexSet) {
        return this
      }
      // Check final edge case 
      if(!this.sex) {
        return this
      }
      // Update array and set text state
      this.output.push(this.sexText)
      this.sexSet = true
      return this
    }

    setName(name) {
      // Set name
      this.name = name
      // Check for edge cases and sex instantiation
      if(!name || this.nameSet) {
        return this
      }
      // Update array and set text state
      this.output.push(this.nameText)
      this.nameSet = true
      return this
    }

    hello() {
      return this.output.map(textSegment => textSegment()).join(' ')
    }

}
