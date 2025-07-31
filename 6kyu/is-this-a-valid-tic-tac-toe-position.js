// You work as a data scientist at an IT company, and your boss, all of a sudden, asked you to find the most common patterns in Tic Tac Toe games submitted to a survey on your company's website.

// However, some of them are not from real games, i. e. the position on such a game board cannot be reached through normal play.

// You have to find a way to filter out such "games", leaving only the correct (reachable) ones.
// Task

// You will be given a 3x3 list of characters (see Initial Solution and Sample Tests for the particular encoding used in your language) representing a Tic Tac Toe game board, with the following specifications:

//     'X' is a square occupied by player X,
//     'O' is a square occupied by player O,
//     '_' is a square not occupied by either player.

// Given this board, you need to determine whether this board represents a position that is reachable through normal play, and return a boolean value: true (if the condition is satisfied) and false otherwise.

// Validation rules:

//     'X' should always be the first player to move.
//     During one move, a player must occupy one extra square.
//     If a player manages to occupy 3 squares in a row (horizontally, vertically or diagonally), the game is immediately over and no further moves can be made; that player wins and is declared victorious (such a game is valid).
//     If all squares are occupied and neither player managed to get 3 in a row, the game ends in a draw (which is valid).
//     Games where not all squares are occupied and neither player got 3 in a row are considered valid.

// Special case: This board (and similar ones where 'X' has two three-in-a-rows but the position can be reached):

// X X X
// O O X
// O O X

// should result in true.

// The board is guaranteed to be 3x3 and to consist of only 'X', 'O' or '_'.

// Good luck!


//array of string with X, O or _, always valid
//return true if possible normal game else false
//["XOX","XOX","OXO"] => true 
//["XXO","OOX","XOO"] => false 
//["OOO","XXX","__X"], false 
//
//always can be X no less than 5 
//count how many times X appears if less than 5 return false else true
//use a loop to count x char
//['X__', 'X_O', 'X_O'] => true
//['_XX', 'OX_', 'OXO']

//0,3,6
//1,4,7
//2,5,8
//0,4,8
//2,4,6
//0,1,2
//3,4,5
//6,7,8



//Codewars
function isValid(board) {
  const won = player => [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  .some( poss => poss.every( pos => board[pos] === player )) ;

  board = board.join("");
  const diff = [].reduce.call( board, (diff,square) => diff + Number( square === 'X' ) - Number( square === 'O' ) , 0 );
  return diff === 1 && ! won('O') || diff === 0 && ! won('X') ;
}


//Codewars
const isValid = board => {
  const nextTurn = ((x, o) => 'XO'[x - o])(...[...'XO'].map(pl => board.join``.split(pl).length - 1));
  
  const hasWon = pl => (new RegExp(`(${pl})(?:${[0,2,3,4].map(v => `(?:.{${v}}\\1){2}`).join`|`})`)).test(board);
  
  return !!nextTurn && !hasWon(nextTurn);
}



//Codewars
function isValid(board) {
  
    const flatBoard = board.join('');
    const xCount = flatBoard.replaceAll(/O|_/g, '').length;
    const oCount = flatBoard.replaceAll(/X|_/g, '').length;


    if (!(xCount === oCount || xCount === oCount + 1)) {
        return false;
    }

    const xW = isWin(board, 'X');
    const oW = isWin(board, 'O');

    
    if (xW) {
       
        if (xCount !== oCount + 1) {
            return false;
        }
         if (oW) {
            return false;
        }
    }


    if (oW) {
      
        if (xCount !== oCount) {
            return false;
        }
      
        if (xW) {
            return false;
        }
    }

       return true;
}


function isWin(board, hwo) {
    const lines = [
        // Горизонтали
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        // Вертикали
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        // Диагонали
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];

    for (let line of lines) {
        if (line[0] === hwo && line[1] === hwo && line[2] === hwo) {
            return true;
        }
    }
    return false;
}