// console.log(board.join('\n') + '\n\n');

//Catalan Opening: Closed Variation

var chess = {
  //White Queen's Pawn moves up 2 spots
  board: [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ],

  move: function(a,b,x,y){
    var self = this;
    this.listOfMoves.forEach(function(moves, index, array) {
      console.log(self.board)
      chess.board[a][b] = chess.board[x][y];
      chess.board[x][y] = ' ';
      console.log(self.board)
    });
  },

  listOfMoves: [
    [4,3,6,3],
    [1,2,3,4]
  ],
}

console.log(chess.board.join('\n'));

var assert = require('chai').assert
var expect = require('chai').expect


describe('Testing the board state', function() {
  it('After Move 1, the board should look like:', function() {
    chess.move();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    );
  });
});
