// Classy Extensions

// The goal of this kata is to train the basic OOP concepts of inheritance and method overriding.

// You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task

// Your task is to complete the Cat class which extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

// The name attribute is accessible in the class with this.name.


class Cat extends Animal {
    constructor(name, speak){
        super(name)
        this.speak = function(){
            return `${this.name} meows.`
        }
    }
}


//Codewars
class Cat extends Animal {
    speak() {
      return `${this.name} meows.`;
    }
  }

  
  
//Codewars
class Cat extends Animal {
    speak() {
       return this.name + " meows.";
    };
  }



//Codewars
class Cat extends Animal {
    constructor (value) {
      super(value)
    }
    speak(){
      return `${this.name} meows.`
    }
  }