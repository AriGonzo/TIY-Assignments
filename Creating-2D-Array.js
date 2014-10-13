

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

var moves = {
  //White Queen's Pawn moves up 2 spots
  step1: board[4][3] = board[6][3],
  step2: board[6][3] = ' ',

  //Black Queen's pawn moves forward 2 spots
  step3: board[3][3] = board[1][3],
  step4: board[1][3] = ' ',

  //White Knight moves up 2 spots and over 1
  step5: board[5][5] = board[7][6],
  step6: board[7][6] = ' ',

  //Black King Pawn moves up 1 spot
  step7: board[2][4] = board[1][4],
  step8: board[1][4] = ' ',

  //White Knight Pawn moves up 1 spot
  step9: board[5][6] = board[6][6],
  step10: board[6][6] = ' ',

  //Black Bishop moves diagonal down and left 1 spot
  step11: board[1][4] = board[0][5],
  step12: board[0][5] = ' ',

  //White Bishop's Pawn moves up 2 spots
  step13: board[4][2] = board[6][2],
  step14: board[6][2] = ' ',

  //Black Knights moves over 1 spot and down 2
  step15: board[2][5] = board[0][6],
  step16: board[0][6] = ' ',

  //White Bishop moves diagonal up and right 1 spot
  step17: board[6][6] = board[7][5],
  step18: board[7][5] = ' '
}
console.log(board.join('\n'));
