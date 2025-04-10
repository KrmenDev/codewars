// Description:

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


//two numbers length and width, always positive, never empty or negative
//return area for square and perimeter for rectangle
// if l and w are the same multiply l * w else l + w * 2


const areaOrPerimeter = function(l , w) {
    return l == w ? l * w : (l + w) * 2
};


//Codewars
const areaOrPerimeter2 = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };


//Codewars
const areaOrPerimeter3 = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
  };


//Codewars
const areaOrPerimeter4 = function(l , w) {
    if (w == l) {
      return w * l;
    }
      else {
        return 2*l+2*w;
      }
  };