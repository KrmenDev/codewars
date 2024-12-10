// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.


Array.prototype.filter = function (cb) {
    var result = [];
  
    for(const el of this) {
      if (cb(el)) {
        result.push(el);
      }
    }
  
    return result;
  }



 //Codewars 
Array.prototype.filter = function(fn){
    var res = [];
    for (var i = 0; i < this.length; i++){
      if (fn(this[i])){
        res.push(this[i]);
      }
    }
    return res;
  }
  



//Codewars
// This filter function return an array with values that meet 
// the conditions set in the ruleCondition callback function.

Array.prototype.filter = function( ruleCondition ) {
    // Create an empty array to store the values that satisfy the ruleCondition
      var arr = [];
      
      this.forEach( function( currentValue ) {
      // Evaluate each element and push the value when content in array meet condition
        if( ruleCondition( currentValue ) ) arr.push( currentValue );
      });
      return arr;
    }



//Codewars
Array.prototype.filter = function (cb) {
    var result = [];
  
    for(const el of this) {
      if (cb(el)) {
        result.push(el);
      }
    }
  
    return result;
  }