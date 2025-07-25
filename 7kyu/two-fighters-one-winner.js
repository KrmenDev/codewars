// Description:

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }



//3 params, strings, always valid
//return string with the name of winning fighter
//"Lew", 10,2 - "Harry",5,4 => "Lew"
//fighter health / damage per attack
// if fight result higher return 


function declareWinner(fighter1, fighter2, firstAttacker) {
    let figh1 = Math.ceil( fighter1.health / fighter2.damagePerAttack)
    let figh2 = Math.ceil( fighter2.health / fighter1.damagePerAttack)

    if(figh1 < figh2){
        return fighter2.name
    }else if(figh2 < figh1){
        return fighter1.name
    }else{
        return firstAttacker
    }
}



//Codewars
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}





//Codewars
function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}



//Codewars
function declareWinner(fighter1, fighter2, firstAttacker) {
  var attacker = (fighter1.name === firstAttacker)
    ? fighter1
    : fighter2;
  
  function noOneWins(){
    return ((fighter1.health > 0) && (fighter2.health > 0));
  }
  
  function getNextAttacker(attacker){
    return (attacker === fighter1) ? fighter2 : fighter1;
  }
  
  function getDefender(attacker){
    return getNextAttacker(attacker);
  }
  
  function killRound(attacker){
    var defender = getDefender(attacker);
    defender.health -= attacker.damagePerAttack;
  }
  
  function getWinner(){
    return (fighter1.health > 0) 
      ? fighter1.name 
      : fighter2.name;
  }
  
  while(noOneWins()) {
    killRound(attacker);
    attacker=getNextAttacker(attacker);
  }
  
  return getWinner();
}