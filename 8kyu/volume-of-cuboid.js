// DESCRIPTION:
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.



//My Solution
//P: Always a num, always positive, always 3, never zero, never floated, never empty
//R: single num, whole, positive, always > 0
//E: 1,2,2 => 4
//   6,2,5 => 60


//P: the formula for calculating the volume of a cuboid: volume = l × w × h
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }


  //CodeWars
  const Kata = {
    getVolumeOfCuboid : (length, width, height) => length * width * height
  }