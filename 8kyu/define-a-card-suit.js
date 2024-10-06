// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//string that with the card letter and suit
//return the name of the suit
//Q♠' => 'spades'
//'9♦' => 'diamonds'
// 'J♥' => 'hearts'

function defineSuit(card) {
    if(card.includes('♣')){
      return 'clubs'
    }else if(card.includes('♦')){
      return 'diamonds'
    }else if(card.includes('♥')){
      return 'hearts'
    }else if(card.includes('♠')){
        return 'spades'
      } 
  }



//Codewars

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}



//Codewars
function defineSuit(card) {
  return {
    '♣' : 'clubs',
    '♦' : 'diamonds',
    '♥' : 'hearts',
    '♠' : 'spades'
  }[card.substr(-1)]
}