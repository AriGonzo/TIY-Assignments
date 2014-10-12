

//0 //1 //2 //3 //4 //5 //6 //7

var board = [
['R','N','B','Q','K','B','N','R'],    //0
['P','P','P','P','P','P','P','P'],    //1
[' ',' ',' ',' ',' ',' ',' ',' '],    //2
[' ',' ',' ',' ',' ',' ',' ',' '],    //3
[' ',' ',' ',' ',' ',' ',' ',' '],    //4
[' ',' ',' ',' ',' ',' ',' ',' '],    //5
['p','p','p','p','p','p','p','p'],    //6
['r','n','b','q','k','b','n','r'] ];  //7

console.log(board.join('\n') + '\n\n');

//Catalan Opening: Closed Variation

//black moves
board[3][3] = board[1][3];
board[1][3] = ' ';

// describe('board')
//
// board[2][4] = board[1][4];
// board[1][4] = board[0][5];
// board[0][5] = ' ';
// board[2][5] = board[0][6];
// board[0][6] = ' ';
// board[4][2] = board[6][2];
// board[6][2] = ' ';
// board[4][3] = board[6][3];
// board[6][3] = ' ';
// board[5][6] = board[6][6];
// board[6][6] = board[7][5];
// board[7][5] = ' ';
// board[5][5] = board[7][4];
// board[7][4] = ' ';
console.log(board.join('\n'));
