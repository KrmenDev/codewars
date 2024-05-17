// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1


// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1


// The other letters don't have power and are only victims.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

//P: string lowercase letters
//R: string with what side wins the war
//E: "w" => lef side wins!
//   "dqp" => Right side wins!
//P: create a variable for the points of letters
// negatives are left side positives are right side
// if score is negative left side wins
// positive right side wins
//else fight again



function alphabetWar(fight) {
 let points = 0;
 for(const letter of fight){
    switch(letter){
        case 'w' : points -= 4; break;
        case 'p' : points -= 3; break;
        case 'b' : points -= 2; break;
        case 's' : points -= 1; break;
        case 'm' : points += 4; break;
        case 'q' : points += 3; break;
        case 'd' : points += 2; break;
        case 'z' : points += 1; break;
    }
 }
 return points < 0 ? "Left side wins!" : points > 0 ? "Right side wins!" : "Let's fight again!";
}



// CodeWars
function alphabetWar(fight){
    let left = 0;
    let right = 0;
    let str = fight.split("");
    for( let i = 0 ; i < str.length; i++) {
     switch(str[i]){
      case "w" : left += 4;
         break;
      case "p" : left +=3;
         break;
      case "b" : left +=2;
         break;
      case "s" : left++;
         break;
      case "m" : right +=4;
         break;
      case "q" : right +=3;
         break;
      case "d" : right +=2;
         break;
     case "z" : right ++;
         break;
         }
      }
    if( left > right ){ return "Left side wins!"}
    else if( right > left){ return "Right side wins!"}
    else { return "Let's fight again!"};
    }



    