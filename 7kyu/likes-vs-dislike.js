// Description:
// Story

// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task

// Create a function that takes in a list of button inputs and returns the final state.
// Examples

// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing

// Notes

//     If no button is currently active, return Nothing.
//     If the list is empty, return Nothing.


//arr with like, dislike or empty
//return the final state of button
//[Dislike, Dislike] => Nothing
//[Like,Like,Like] => Like
//[Like,Dislike] => Dislike 
//[] => Nothing


//if arr length 1 return that
//if arr length two and oposites or empty return Nothing
//check element on arr if the first is not the same as next return nothing
//if element is the same return nothing

//check how many times a like appears and if odd return it if even the next



// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  return Like || Dislike || Nothing ;
}




//Codewars
function likeOrDislike(buttons) {
  let state = 'Nothing';

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = 'Nothing'
    } else {
      state = buttons[i]
    }
  }

  return state
}




//Codewars
function likeOrDislike(buttons) {
  return buttons.reduce( (state,button) => button === state ? Nothing : button, Nothing );
}




//Codewars
const oneElement = (arr) => {
  if(arr.length === 1 && arr[0] === 'Like') {
    return arr[0];
  }
  if(arr.length === 1 && arr[0] === 'Dislike') {
    return arr[0];
  }
}

const counterLikeAndDislike = (array) => {
  let onButton = 'Nothing';
  let checkedButton = 0;

  for (let index = 0; index < array.length; index += 1) {
    if(checkedButton === 0 && array[index] === 'Like' || checkedButton === 1 && onButton === 'Dislike') {
      onButton = array[index];
      checkedButton = 1;
    } else if(array[index] === onButton) {
      onButton = 'Nothing';
      checkedButton = 0;
    }
    
    if(checkedButton === 0 && array[index] === 'Dislike' || checkedButton === 1 && onButton === 'Like') {
      onButton = array[index];
      checkedButton = 1;
    } else if(array[index] === onButton) {
      onButton = 'Nothing';
      checkedButton = 0;
    }
  }
  return onButton;
}

function likeOrDislike(buttons) {
  if(buttons.length === 0) return 'Nothing';
  if(buttons.length === 1) {
    const result = oneElement(buttons);
    return result;
  }
  return counterLikeAndDislike(buttons);
}