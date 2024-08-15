// DESCRIPTION:
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?


//P: number, always positive, never empty
//R: Return true if yes, false otherwise :)
//E: 10, 5 => true
//E: 7, 4 => false
//E: 100, 40 => true
//P: if the number of bullets is less than the dragons multiplied by two return boolean

function hero(bullets, dragons){
    return bullets >= (dragons * 2) ? true : false
    }



//CodeWars Best Practice
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }


//CodeWars
  function hero(bullets, dragons){
    return (bullets / 2 >= dragons) ? true : false;
    }

    